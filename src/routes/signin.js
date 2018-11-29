const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt-nodejs');
const User = require('../models/usuarioModel');

const secret = '56asiyuhdjkbasdhtiy8ou192e';
// router.post('/', function (req, res) {
//     let data = req.body;
//     //console.log(data);
//     User.findOne({email: data.email, dni: data.dni})
//         .then(user => {
//             if(user){
//                 let user2 = user.toJSON();
//                 let toSign = { email: user2.email, 
//                                 dni: user2.dni, 
//                                 id: user2._id.toJSON()};
//                 console.log(toSign);
//                 let token = jwt.sign(toSign, secret);
//                 res.status(200).json(token);
//             } else {
//                 res.status(401).json({ message: 'Credenciales invalidas'});
//             }
//         })
// });

router.post('/', function (req, res) {
    let data = req.body;
    User.findOne({ email: data.email })
        .then(user => {
            if (user) {
                bcrypt.compare(req.body.password, user.password, (err, result) => {
                    if (err) {
                        return res.status(401).json({message: "Incorrect data", error: err})
                    }
                    if (result) {

                        res.status(200).json(user);

                        // let toSign = { email: result.email,
                        //                id: result._id};
                        // console.log(toSign);
                        // let token = jwt.sign(toSign, secret);
                        // res.status(200).json(token);
                        
                        // const token = jwt.sign({
                        //     userId: result._id
                        // }, secret)
                        //     res.status(200).json(token);
                    }
                    res.status(401).json({message: "Login failure aca 1"})
                })
            } else {
                res.status(401).json({message: "User not found"})
            }
        })
        .catch(err => {
            res.status(500).json({message: "Invalid login data sale por el catch"})
        })
})


module.exports = router;