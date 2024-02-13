const mongoose = require("mongoose");

const connectDB = () => {
  try {
    const conn = mongoose.connect("your mongoDB url");

    console.log("Connecting to" + conn.connection.host);
  } catch (err) {
    console.log("Error " + err);
  }
};

module.exports = connectDB;
