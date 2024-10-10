const connectDB = require("./config/db");
const DUMMYDATA = require("../dummyData.json");
const Transaction = require("../model/transactionModel");

connectDB();

const impoportData = async () => {
  try {
    await Transaction.deleteMany();

    await Transaction.insertMany(DUMMYDATA);

    console.log("Data Imported!");
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

impoportData();
