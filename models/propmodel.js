const mongoose = require('mongoose');

const propiedadSchema = new mongoose.Schema({
  id:Number,
  tipo: String,
  estrato: Number,
  estado: String,
  precio: Number,
  disponible: Boolean
},
  { timestamps: true }
);

module.exports = mongoose.model('Propiedad', propiedadSchema, 'propiedades');