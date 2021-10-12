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

module.export = mongoose.model('Propiedad', propiedadSchema);