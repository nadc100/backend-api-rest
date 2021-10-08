const mongoose = require('mongoose');

let propiedadSchema = mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  tipo: String,
  estrato: Number,
  estado: String,
  precio: Number,
  disponible: Boolean
});

module.exports = mongoose.model( "Propiedad", propiedadSchema, "collection" )