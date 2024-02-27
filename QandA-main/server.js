const express = require("express");
const connectDb = require("./config/db");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv").config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use("/api/auth/", require("./route/userRoute"));

app.listen(3000, () => {
  console.log("server running on", 3000);
});

connectDb();
