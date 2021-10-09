const db = require('./db');
const Usuario = require('./models/user');

export let createUsuario = async (req, res) => {
    const { nombre,password,correo } = req.body
    const Usuario = Usuario(nombre,password,correo)
    const UsuarioGuardada = await db.nuevoUsuario.save()
    res.status(201).json(UsuarioGuardada)
}

export const getUsuario = async (req, res) => {
    const Usuarioes = await db.Usuario.find();
    res.json(Usuarioes)
}

export const getUsuarioById = async (req, res) => {
    const Usuario = await db.Usuario.findById(req.params.productId);
    res.status(200).json(Usuario)
}

export const updateUsuarioById = async (req, res) => {
    const usuarioActualizado = await db.Usuario.findByIdAndUpdate(req.params.productId,req.body,{new:true});
    res.status(200).json(usuarioActualizado);
}

export const deleteUsuarioById = async (req, res) => {
    const { usuarioId } = req.params;
    await db.Usuario.findByIdAndDelete(usuarioId);
}

module.exports = controladorUsuarios;