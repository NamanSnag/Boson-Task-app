const express = require('express');
const router = express.Router();
const {registerUser, login } = require('../controller/user_Controller');

// create new user
router.post('/register',registerUser);

// login user
router.post('/login', login);


module.exports = router;