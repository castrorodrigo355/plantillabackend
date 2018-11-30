const express = require("express");
const User = require("../models/usuarioModel")
const router = express.Router();

router.delete("/", (req, res) => {
    User.remove({})
        .then( result => res.status(204).json({ messsage: 'deleted!'}))
        .catch( err => res.status(503).json(err));
})

module.exports = router;