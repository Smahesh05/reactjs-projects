const express = require("express");
const {
  registerUser,
  loginUser,
  getMe,
} = require("../controller/userController");

const route = express.Router();

route.post("/", registerUser);
route.post("/login", loginUser);
route.get("/:id", getMe);

module.exports = route;
