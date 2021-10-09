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
const Usuario = mongoose.model('Usuario', usuarioSchema);

module.export = Usuario;