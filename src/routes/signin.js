const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt-nodejs');
const User = require('../models/usuarioModel');

const secret = '56asiyuhdjkbasdhtiy8ou192e';

router.post('/', (req, res) => {
    User.findOne({ email: req.body.email })
        .then(user => {
            if (user) {
                bcrypt.compare(req.body.password, user.password, (err, result) => {
                    if (err) {
                        return res.status(401).json({
                            message: "Error Login",
                            error: err
                        })
                    }
                    if (result) {
                        const token = jwt.sign({
                            email: user.email,
                            userId: user._id
                        }, secret, {
                                expiresIn: "1h"
                            })
                        return res.status(200).json({
                            message: "Login OK",
                            token: token
                        })
                    }
                    res.status(401).json({
                        message: "Login failure"
                    })
                })
            } else {
                res.status(401).json({
                    message: "Login failure"
                })
            }
        })
        .catch(err => {
            res.status(500).json({
                message: "Invalid Catch",
                error: err
            })
        })
})

module.exports = router;