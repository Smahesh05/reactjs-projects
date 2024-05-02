const express = require("express");
const {
  registerUser,
  loginUser,
  logoutUser,
} = require("../controllers/userController");

const route = express.Router();

route.post("/login", loginUser);
route.post("/", registerUser);
route.post("/logout", logoutUser);

module.exports = route;
