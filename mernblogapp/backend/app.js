const express = require("express");
const routes = require("./routes/userRoutes");
const connectDB = require("./config/db");
const dotenv = require("dotenv").config();
const cors = require("cors");
const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use("/api/users/", routes);

app.listen(PORT, () => console.log("listening on port", PORT));
connectDB();
