import mongoose from 'mongoose';
const { Schema } = mongoose;

// define a schema
const usuarioSchema = new Schema({
  name: {
    nombre: String,
    password: String,
    correo: String
  }
});

// compile our model
const Usuario = mongoose.model('usuario', usuarioSchema);

module.export = Usuario;