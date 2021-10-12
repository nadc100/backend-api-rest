const mongoose = require('mongoose');
//const { Schema } = mongoose;

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

const Propiedad = mongoose.model('Propiedad', propiedadSchema);

module.export = Propiedad;