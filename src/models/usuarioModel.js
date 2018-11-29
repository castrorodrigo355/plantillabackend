const {Schema, mongoose} = require("../database/database")
var user = new Schema({ 
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true },
    password: { type: String, required: true }    
})
var User = mongoose.model("User", user)

module.exports = User