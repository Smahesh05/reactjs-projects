const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://jdev7525:root@votingapp.4jxqd1s.mongodb.net/"
    );
    console.log("Connected to database: " + conn.connection.host);
  } catch (error) {
    console.log("Error connecting to database: " + error);
  }
};

module.exports = connectDb;
