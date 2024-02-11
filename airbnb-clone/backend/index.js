const express = require("express");
const PORT = 5000;
const userRoutes = require("./routes/userRoutes");
const cors = require("cors");
const dotenv = require("dotenv").config();
const connectDB = require("./Config/db");
const cookieParser = require("cookie-parser");
const { errorHandler } = require("./middleware/errorMiddleware");

const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());

app.use("/api/users", userRoutes);

app.use(errorHandler);

connectDB();

app.listen(PORT, () => console.log("listening on port " + PORT));
