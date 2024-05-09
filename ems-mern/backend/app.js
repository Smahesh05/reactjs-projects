const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const dotenv = require("dotenv").config();
const PORT = 5000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use("/api/users/", require("./routes/userRoutes"));
app.use("/api/employee/", require("./routes/employeeRoutes"));

app.listen(PORT, () => console.log(`listening on ${PORT}`));
connectDB();
