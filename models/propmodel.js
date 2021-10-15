const mongoose = require('mongoose');

const propiedadSchema = new mongoose.Schema({
  id:Number,
  tipo: String,
  estado: String,
  ciudad: String,
  fotos: Array,
  habitaciones: Number,
  barrio: String,
  precio: Number,
  caracteristicas: String,
  area: Number,
  estrato: Number,
  sanitarios: Number,
  parqueaderos: Number,
  disponible: Boolean,
  fecha: Date
},
  { timestamps: true }
);

module.exports = mongoose.model('Propiedad', propiedadSchema, 'propiedades');
