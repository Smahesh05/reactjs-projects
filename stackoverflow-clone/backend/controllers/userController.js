const User = require("../model/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      res.status(404).json("User already exists");
    }

    const hashPassword = await bcrypt.hash(password, 12);
    const newUser = await User.create({
      name,
      email,
      password: hashPassword,
    });
    const token = jwt.sign({ email: newUser.email, id: newUser._id }, "test", {
      expiresIn: "30d",
    });
    res.status(200).json({ result: newUser, token });
  } catch (error) {
    res.status(500).json("Something went wrong");
  }
};

const loginUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      res.status(404).json("User not existed");
    }

    const isPasswordCrt = await bcrypt.compare(password, existingUser.password);

    if (!isPasswordCrt) {
      return res.status(404).json({ message: "invalid credentials" });
    }

    const token = jwt.sign(
      { email: existingUser.email, id: existingUser._id },
      "test",
      {
        expiresIn: "30d",
      }
    );

    res.status(200).json({ result: existingUser, token });
  } catch (error) {
    res.status(500).json("Something went wrong");
  }
};

const logoutUser = (req, res) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });
  res.status(200).json({ message: "Logged out successfully" });
};

module.exports = {
  registerUser,
  loginUser,
  logoutUser,
};
