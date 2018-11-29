const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../models/usuarioModel');

const secret = '56asiyuhdjkbasdhtiy8ou192e';

router.post('/', function (req, res) {
    let data = req.body;
    //console.log(data);
    User
        .findOne(
            {
                email: data.email,
                dni: data.dni
            }
        )
        .then(user => {
            if(user){
                let user2 = user.toJSON();
                let toSign = { email: user2.email, 
                                dni: user2.dni, 
                                id: user2._id.toJSON()};
                console.log(toSign);
                let token = jwt.sign(toSign, secret);
                res.status(200).json(token);
            } else {
                res.status(401).json({ message: 'Credenciales invalidas'});
            }
        })
});

module.exports = router;