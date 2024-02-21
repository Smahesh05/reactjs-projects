const User = require("../models/userModel");

const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  const user = await User.create({
    name,
    email,
    password,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
};

const loginUser = (req, res) => {
  res.json({ message: "login" });
};

const logout = (req, res) => {
  res.json({ message: "logout" });
};

module.exports = { registerUser, loginUser, logout };
