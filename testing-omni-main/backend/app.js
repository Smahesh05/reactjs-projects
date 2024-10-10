const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const Transaction = require("./model/transactionModel");
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000; // Allow dynamic port

// Connect to the database
connectDB();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// List transactions with search and pagination
app.get("/api/transactions", async (req, res) => {
  const { month, search, page = 1, perPage = 10 } = req.query;
  const query = {};

  if (month) {
    query.dateOfSale = { $regex: new RegExp(`-${month}-`, "i") }; // Match month
  }

  if (search) {
    query.$or = [
      { title: new RegExp(search, "i") },
      { description: new RegExp(search, "i") },
      { price: Number(search) },
    ];
  }

  try {
    const transactions = await Transaction.find(query)
      .skip((page - 1) * perPage)
      .limit(parseInt(perPage));
    res.json(transactions);
  } catch (error) {
    res.status(500).send("Error fetching transactions");
  }
});

app.get("/api/statistics", async (req, res) => {
  const { month } = req.query; // Expecting month as a number (e.g., "01" for January)

  // Ensure month is valid
  if (!month || month < 1 || month > 12) {
    return res.status(400).json({ message: "Invalid month provided" });
  }

  // Build the query to filter by month
  const startDate = new Date(new Date().getFullYear(), month - 1, 1); // Start of the month
  const endDate = new Date(new Date().getFullYear(), month, 1); // Start of the next month

  try {
    // Filter transactions for the selected month
    const totalSalesData = await Transaction.aggregate([
      { $match: { dateOfSale: { $gte: startDate, $lt: endDate } } },
      {
        $group: {
          _id: null,
          totalAmount: { $sum: "$price" },
          totalItems: { $sum: 1 },
        },
      },
    ]);

    // Count sold and not sold items
    const totalSold = await Transaction.countDocuments({
      dateOfSale: { $gte: startDate, $lt: endDate },
      sold: true,
    });
    const totalNotSold = await Transaction.countDocuments({
      dateOfSale: { $gte: startDate, $lt: endDate },
      sold: false,
    });

    // Construct the response
    const response = {
      totalSales:
        totalSalesData.length > 0
          ? totalSalesData[0]
          : { totalAmount: 0, totalItems: 0 },
      totalSold,
      totalNotSold,
    };

    res.json(response);
  } catch (error) {
    console.error("Error fetching statistics:", error);
    res.status(500).send("Error fetching statistics");
  }
});

app.listen(port, () => console.log(`Server started on port ${PORT}`));
