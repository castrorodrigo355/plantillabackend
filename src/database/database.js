const mongoose = require("mongoose")
const Schema = mongoose.Schema
mongoose.connect("mongodb://localhost/dbprueba", {useNewUrlParser: true})
mongoose.Promise = global.Promise

module.exports = {Schema, mongoose}