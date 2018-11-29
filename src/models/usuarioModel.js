const {Schema, mongoose} = require("../database/database")
var user = new Schema({ nombre: String,
                        apellido: String,
                        celular: String})
var User = mongoose.model("users", user)

module.exports = User