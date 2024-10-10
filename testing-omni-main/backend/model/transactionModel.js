const mongoose = require("mongoose");

const transactionSchema = mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    require: true,
    trim: true,
  },
  price: {
    type: Number,
    require: true,
  },
  description: {
    type: String,
    require: true,
    trim: true,
  },
  category: {
    type: String,
    require: true,
    lowercase: true,
    trim: true,
  },
  image: {
    type: String,
    require: true,
    lowercase: true,
    trim: true,
  },
  sold: {
    type: Boolean,
    default: false,
  },
  dateOfSale: {
    type: Date,
    require: true,
  },
});

const Transaction = mongoose.model("Transaction", transactionSchema);

module.exports = Transaction;
