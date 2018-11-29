const express = require("express");
const User = require("../models/usuarioModel")
const router = express.Router();
//const routerVuelos = require("./vuelos")

// CREAR UN USUARIO
router.post("/", (req, res) => {
    let data = req.body;
    let user = new User(data);
    user.save()
        .then(result => res.status(201).json(result))
        .catch(err => res.status(503).json(err));
})

// OBTENER LA LISTA DE USUARIOS
router.get("/", (req, res) => {
    User.find({}).then(users => res.json (users));
})

// OBTENER UN DETERMINADO USUARIO MEDIANTE UN "id"
router.get("/:id", (req, res) => {
    User.findById(req.params.id)
        .then(usuario => {
            if (usuario){
                res.json(usuario)
            } else {
                res.status(404).json({ message: 'not found!'})
            }
        });
})

// ELIMINAR UN DETERMINADO USUARIO MEDIANTE UN "id"
router.delete("/:id", (req, res) => {
    User.findByIdAndDelete(req.params.id)
        .then( result => res.status(204).json({ messsage: 'deleted!'}))
        .catch( err => res.status(503).json(err));
})

// ACTUALIZAR UN DETERMINADO USUARIO MEDIANTE UN "id"
router.put("/:id", (req, res) => {
    User.findByIdAndUpdate(req.params.id, {$set: {"nombre": req.body.nombre, 
                                                  "apellido": req.body.apellido,
                                                  "celular": req.body.celular
                                                  }}, {new: true}, (err, doc) => {
        err ? res.json(err) : res.json(doc)
    })
})

// router.use("/:id/vuelos", routerVuelos)

module.exports = router;