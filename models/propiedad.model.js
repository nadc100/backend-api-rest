let mongoose = require('mongoose');
const Schema = mongoose.Schema;

let propiedadSchema = Schema({
  tipo: String,
  estrato: Number,
  estado: String,
  precio: Number,
  disponible: Boolean
});

let propiedad  = mongoose.model('propiedad', propiedadSchema);
