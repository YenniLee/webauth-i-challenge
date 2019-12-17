const express = require('express');
const bcrypt = require('bcryptjs');

const router = express.Router();
const Users = require('../users/users-model.js');


// '/api/auth/register'
router.post('/register', (req, res) => {
    let user = req.body;
    const hash = bycrypt.hashSync(user.password, 12);
    user.password = hash;

    Users.add(user)
        .then(savedUser => {
            res.status(201).json(savedUser);
        })
        .catch(err => {
            res.status(500).json(error);
        });
});

// '/api/auth/login'
router.post('/login', (req, res) => {
    let { username, password } = req.body;

    Users.findBy({ username })
        .first()
        .then(user => {
            if(user && bcrypt.compareSync(password, user.password)) {
                res.status(200).json({ message: 'Login Successful', userId: `${user.id}` })
            } else {
                res.status(401).json({ message: 'incorrect login information' })
            }
        })
        .catch(err => {
            res.status(500).json(err);
        });
});


module.exports = router;