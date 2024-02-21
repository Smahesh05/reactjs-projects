const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const userDetail = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  phone: {
    type: Number,
    require: true,
  },
  mail: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
});

// generate token
userDetail.methods.generateToken = async function (cb) {
  try {
    const user = this;
    const token = jwt.sign(user._id.toHexString(), config.SECRET);
    user.token = token;
    const savedUser = await user.save();
    cb(null, savedUser);
  } catch (err) {
    cb(err);
  }
};

// find by token
userDetail.statics.findByToken = async function (token, cb) {
  try {
    const user = this;
    const decoded = jwt.verify(token, config.SECRET);
    const foundUser = await user.findOne({ _id: decoded, token: token });
    cb(null, foundUser);
  } catch (err) {
    cb(err);
  }
};

// delete token
userDetail.methods.deleteToken = async function (token, cb) {
  try {
    const user = this;
    const updatedUser = await user.updateOne({ $unset: { token: 1 } });
    cb(null, updatedUser);
  } catch (err) {
    cb(err);
  }
};

const User = mongoose.model("user", userDetail);

module.exports = User;
