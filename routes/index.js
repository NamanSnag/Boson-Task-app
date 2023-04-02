const express = require('express');
const router = express.Router();

// user routes link
router.use('/user', require('./user'));

module.exports = router;