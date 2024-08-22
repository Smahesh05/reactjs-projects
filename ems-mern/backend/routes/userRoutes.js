const express = require("express");

const {
  registerUser,
  authUser,
  logoutUser,
} = require("../controller/userController");

const routes = express.Router();
// root
routes.post("/", registerUser);
routes.post("/auth", authUser);
routes.post("/logout", logoutUser);

module.exports = routes;
