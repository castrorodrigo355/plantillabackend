const express = require("express");
const router = express.Router({mergeParams : true});
const User = require("../models/usuarioModel")
const Vuelo = require("../models/vueloModel")

// DADO UN USUARIO CREAR UN VUELO
router.post("/", (req, res) => {
    const unVuelo = new Vuelo(req.body)
    console.log(req.body)
    User.findOne({_id: req.params.id}, (err, usuario) => {
            err ? res.json(err) : res.json(usuario)
            usuario.vuelos.push(unVuelo)
            usuario.save()
    })
})

// OBTENER LA LISTA DE VUELOS DE UN USUARIO
router.get("/", (req, res) => {
    User.findOne({_id: req.params.id}, (err, usuario) => {
        err ? res.json(err) : res.json(usuario.vuelos)
    })
})

// OBTENER EL VUELO "id" DE UN USUARIO
router.get("/:idVuelo", (req, res) => {
    User.findOne({_id: req.params.id}, (err, usuario) => {
        if(err) res.json(err)
        unVuelo = usuario.vuelos.find(unVuelo => unVuelo._id == req.params.idVuelo)
        if(unVuelo){
            res.json(unVuelo)
        }else{
            res.json({mensaje:"Vuelo no encontrado"})
        }
    })
})

// ELIMINAR EL VUELO "id" DE UNA USUARIO
router.delete("/:idVuelo", (req, res) => {
    User.findOne({_id: req.params.id}, (err, usuario) => {
        if(err) res.json(err)
        usuario.vuelos = usuario.vuelos.filter(unVuelo => unVuelo._id != req.params.idVuelo)
        usuario.save()
        res.json({mensaje:"Vuelo eliminado"})
    })
})

// ACTUALIZAR UN VUELO DE UN DETERMINADO USUARIO MEDIANTE UN "id"
router.put("/:idVuelo", (req, res) => {
    User.findOne({_id: req.params.id}, (err, usuario) => {
        if(err) res.json(err);
        const vuelo = usuario.vuelos.find(unVuelo => unVuelo._id == req.params.idVuelo);
        vuelo.destino = req.body.destino;
        vuelo.duracion = req.body.duracion;
        
        const index = usuario.vuelos.map((unVuelo, i) => {
            if(unVuelo._id == vuelo._id){
                return i
            }
        })
        const posicion = index[0];
        usuario.vuelos.splice(posicion, vuelo)
        usuario.save()
            .then(result => res.status(201).json(result))
            .catch(err => res.status(503).json(err));
    })
})

module.exports = router;