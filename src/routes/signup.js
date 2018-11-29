const express = require("express");
const User = require("../models/usuarioModel")
const bcrypt = require('bcrypt-nodejs');
const router = express.Router();

router.post('/', (req, res) => {
    User.findOne({ email: req.body.email })
        .then(result => {
            if (result) {
                return res.status(422).json({
                    message: "Email is already taken"
                })
            } else {
                bcrypt.hash(req.body.password, null, null, (err, hash) => {
                    if (err) {
                        return res.status(500).json({
                            error: err
                        })
                    } else {
                        const user = new User({
                            email: req.body.email,
                            username: req.body.username,
                            password: hash
                        })
                        user.save()
                            .then(result => {
                                res.status(201).json({
                                    message: "Created user successfully"
                                })
                            })
                            .catch(err => {
                                res.status(500).json({
                                    message: "Could not create user",
                                    error: err
                                })
                            })
                    }
                })
            }
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

module.exports = router;