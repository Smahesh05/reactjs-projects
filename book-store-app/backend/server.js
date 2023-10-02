const connectDB = require("./config/db.js");
const Routes = require("./routes/bookRoutes.js");
const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 5000;
require("dotenv").config();

const app = express();

// middleware for parsing request body
app.use(express.json());

// middleware for handling  CORS requests
app.use(cors());

// middleware for parsing routes
app.use("/api/book/", Routes);

app.listen(port, () => console.log(`server started at ${port}`));
connectDB();
