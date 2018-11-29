const mongoose = require("mongoose")
const Schema = mongoose.Schema
mongoose.connect("mongodb://localhost/dbprueba", {useNewUrlParser: true})

module.exports = {Schema, mongoose}