const express = require("express");

const { register, login, logout, updatePassword } = require("./JwtAuth");
const routers = express.Router();

routers.route("/register").post(register);
routers.route("/login").post(login);
routers.post("/logout", logout);
routers.put("/:id", updatePassword);

module.exports = routers;
