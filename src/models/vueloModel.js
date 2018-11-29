const {Schema, mongoose} = require("../database/database")
var vuelo = new Schema({ destino: String, 
                         duracion: String })
var Vuelo = mongoose.model("vuelos", vuelo)

module.exports = Vuelo