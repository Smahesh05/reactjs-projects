const express = require("express");
const port = 3000;
const app = express();
const cors = require("cors");
const connectDB = require("./config/db");

connectDB();

app.use(express.json());
app.use(cors());

app.get("/q", (req, res) => {
  let searchQuery = req.query.search;
  res.json({ message: "the server is strted hi ram", searchQuery });
});

app.listen(5000, () => console.log("server started on port 5000"));

// http://localhost:5000/mahesh?q=search&month=&page=&perpage=10;
