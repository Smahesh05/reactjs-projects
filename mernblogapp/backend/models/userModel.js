const mongoose = require("mongoose");

const UserModel = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
});

const User = mongoose.model("User", UserModel);

module.exports = User;
