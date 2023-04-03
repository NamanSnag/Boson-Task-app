const express = require('express');
const router = express.Router();
const {getAllTask, addTask, updateTask, deleteTask} = require('../controller/task_Controller');
const verifyToken = require('../utils/jwt_Verify');

// user routes link
router.use('/user', require('./user'));

// get all tasks
router.get('/tasks', verifyToken, getAllTask);

// add new tasks
router.post('/addTask', verifyToken, addTask);

// update tasks
router.patch('/update/:id', verifyToken, updateTask);

// delete task
router.delete('/delete/:id', verifyToken, deleteTask);

module.exports = router;