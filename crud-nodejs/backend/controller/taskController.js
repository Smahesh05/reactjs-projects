const Task = require("../model/taskModel");

const getTasks = async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
};

const addTask = async (req, res) => {
  try {
    const tasks = await Task.create({
      name: req.body.name,
    });
    res.json(tasks);
  } catch (err) {
    res.status(500).json(err);
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id } = req.params.id;
    const tasks = await Task.findByIdAndDelete({ id });
    res.json(tasks);
  } catch (err) {
    res.status(404).json(err);
  }
};

module.exports = {
  getTasks,
  addTask,
  deleteTask,
};
