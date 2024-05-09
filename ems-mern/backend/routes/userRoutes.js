const express = require("express");

const { registerUser, authUser } = require("../controller/userController");

const routes = express.Router();
// root
routes.post("/", registerUser);
routes.post("/auth", authUser);

module.exports = routes;
