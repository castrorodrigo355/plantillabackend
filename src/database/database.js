const mongoose = require("mongoose")
const Schema = mongoose.Schema
const user = "rodric88"
const pass = "rodric8888crodri"
// mongoose.connect("mongodb://localhost/dbprueba", {useNewUrlParser: true})
mongoose.connect(`mongodb://${user}:${pass}1@ds231228.mlab.com:31228/ddbbprueba`, {useNewUrlParser: true})
// DeprecationWarning: collection.ensureIndex is deprecated. Use createIndexes instead
// Para solucionar agregue la siguiente linea...
mongoose.set('useCreateIndex', true);

module.exports = {Schema, mongoose}