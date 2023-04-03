const Task = require("../models/task");
const User = require("../models/user");

// get all task action
const getAllTask = async (req, res, next) => {
  try {
    const tasks = await Task.find({user: req.user.id})
    return res.status(200).json(tasks);
  } catch (error) {
    next(error);
  }
};

 // Create a new task
const addTask = async (req, res, next) => {

  const userId = req.user.id; // assuming the user ID is stored in the req.user object
  const task = new Task({
    task: req.body.task,
    user: userId
  });

  try {
    const newTask = await task.save();
    return res.status(201).json({
      newTask: newTask,
      message: "successfully added task",
    });
  } catch (error) {
    next(error);
  }
};

// Update a task
const updateTask = async (req, res, next) => {
  try {
    const task = await Task.findById(req.params.id);

    task.task = req.body.task;

    const updatedTask = await task.save();

    return res.status(201).json({
      updatedTask: updatedTask,
      message: "successfully updated task",
    });
  } catch (error) {
    next(error);
  }
};

const deleteTask = async (req, res, next) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    return res.status(200).json({ message: "Task deleted" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllTask,
  addTask,
  updateTask,
  deleteTask
};
