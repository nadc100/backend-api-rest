import mongoose from 'mongoose';
const { Schema } = mongoose;

const propiedadSchema = new Schema({
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