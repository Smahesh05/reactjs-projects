const mongoose = require("mongoose");

const MONGO_URI =
  "mongodb+srv://maheshsolanke84:root@querytest.gmytk.mongodb.net/";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
