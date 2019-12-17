const express = require('express');
const authRouter = require('../auth/auth-router.js');
const usersRouter = require('../users/users-router.js');

const router = express.Router();

router.use('/auth', authRouter);
router.use('/users', usersRouter);

router.get('/', (req, res) => {
    res.json({ message: 'Hello from API' })
});

module.exports = router;