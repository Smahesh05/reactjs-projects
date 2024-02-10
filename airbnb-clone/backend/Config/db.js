const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(`connected to ${conn.connection.host}`);
  } catch (error) {
    console.log(`error : ${error.message}`);
  }
};

module.exports = connectDB;
