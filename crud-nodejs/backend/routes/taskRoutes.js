const express = require("express");
const {
  getTasks,
  deleteTask,
  addTask,
} = require("../controller/taskController");

const routes = express.Router();

routes.get("/", getTasks);
routes.get("/", addTask);
routes.get("/:id", deleteTask);
// routes.get("/:id", getTasks)

module.exports = routes;
