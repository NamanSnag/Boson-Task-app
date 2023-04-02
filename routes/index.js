const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    return res.send('<h1>Hello</h1>');
});

// user routes link
// router.use('/user', require('./user'));

module.exports = router;