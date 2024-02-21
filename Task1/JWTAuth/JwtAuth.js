const express = require("express");

const UserDetail = require("../model/userDetails");

const jwt = require("jsonwebtoken");

const bcrypt = require("bcrypt");

const jwtSecret = "1032b5bd69871f783cbfd4d43dfc69155b812cd5";

//Register Route

const register = async (req, res, next) => {
  const { name, phone, mail, password } = req.body;

  if (password.length < 6) {
    return res.json({
      message: "Password Have Min 6 Char...",
    });
  }

  bcrypt.hash(password, 10).then(async (hash) => {
    await UserDetail.create({
      name,
      phone,
      mail,
      password: hash,
    })
      .then((user) => {
        const maxAge = 3 * 60 * 60;
        const token = jwt.sign(
          {
            id: user._id,
            mail,
            name,
            phone,
          },
          jwtSecret,
          {
            expiresIn: maxAge,
          }
        );
        res.cookie("jwt", token, {
          httpOnly: true,
          maxAge: maxAge * 1000,
        });
        res.status(201).json({
          message: "User Register Sucess...",
          user: user._id,
        });
      })
      .catch((error) => {
        res.status(400).json({
          message: "User Not register...Or User Already Exists.",
        });
      });
  });
};

//Login Route

const login = async (req, res, next) => {
  const { mail, password } = req.body;
  if (!mail || !password) {
    return res.json({
      message: "User Not Found...",
    });
  }

  const user = await UserDetail.findOne({ mail });
  if (!user) {
    return res.status(400).json({
      message: "User Not Login... Or Don't Have a Account...",
    });
  }
  bcrypt
    .compare(password, user.password)
    .then(function (result) {
      if (result) {
        const maxAge = 3 * 60 * 60;
        const token = jwt.sign(
          {
            id: user._id,
            mail,
          },
          jwtSecret,
          {
            expiresIn: maxAge,
          }
        );
        res.cookie("jwt", token, {
          httpOnly: true,
          maxAge: maxAge * 1000,
        });
        res.status(201).json({
          message: "User Login Success...",
        });
      }
    })
    .catch((error) =>
      res.status(500).json({
        message: "Error Occured...",
        error: error.message,
      })
    );
};

//logout controller
const logout = async (req, res) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expiresIn: new Date(0),
  });
  res.status(200).json({ message: "Logged out successfully" });
};

//
const updatePassword = async (req, res) => {
  const { id } = req.params;
  const user = await UserDetail.findById(id);
  if (req.body.password) {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    user.password = hashedPassword;
  }
  const updatedUser = await user.save();
  res.json({
    mail: updatedUser.mail,
  });
};
//
module.exports = {
  logout,
  login,
  register,
  updatePassword,
};
