const express = require("express");
const cors = require("cors");
const connection = require("./config/db");

const PORT = 5000;

const productRoutes = require("./routes/productRoutes");
const categoryRoutes = require("./routes/categoryRoutes");

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

app.use("/api/products", productRoutes);
app.use("/api/categories", categoryRoutes);

connection
  .query("SELECT 1")
  .then(() => {
    console.log("Connection successful");

    app.listen(PORT, () => console.log(`listening on ${PORT}`));
  })
  .catch((err) => console.log("error: ", err));
