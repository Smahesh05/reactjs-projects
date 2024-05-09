const express = require("express");
const { addEmployee } = require("../controller/employeeController");
const { protect, admin } = require("../middleware/authMiddleware");

const routes = express.Router();

routes.post("/", protect, admin, addEmployee);

module.exports = routes;
