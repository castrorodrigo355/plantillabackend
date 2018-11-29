const mongoose = require("mongoose")
const Schema = mongoose.Schema
mongoose.connect("mongodb://localhost/dbprueba", {useNewUrlParser: true})
// DeprecationWarning: collection.ensureIndex is deprecated. Use createIndexes instead
// Para solucionar agregue la siguiente linea...
mongoose.set('useCreateIndex', true);

module.exports = {Schema, mongoose}