const mongoose = require("mongoose");

const connectDb = async () => {
  mongoose
    .connect("mongodb+srv://jdev7525:root@blogmernapp.pvhl0aq.mongodb.net/")
    .then(() => {
      console.log("Database connectd...");
    });
};
module.exports = connectDb;
