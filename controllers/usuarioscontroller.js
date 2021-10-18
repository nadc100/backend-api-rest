const usuarioModel = require("../models/usuario.model");

module.exports = class controladorusuarios {

    static async insert(req, res) {
        try {
            let usuario = req.body;
            usuario = await usuarioModel.create(usuario);
            usuario.password = undefined;
            res.status(201).json(usuario);
        } catch (err) {
            res.status(400).json({ "message": err.message })
        }
    }

    static async autenticarUsuario(req, res) {
        try {
            const credencial = req.body;
            const usuario = await usuarioModel.findOne({ "usuarioname": credencial.usuarioname });
            if (usuario == undefined || usuario == null) {
                res.status(404).json({ "message": "Usuario no existe" });
            } else if (usuario.password != credencial.password) {
                res.status(403).json({ "message": "Usuario / contraseña no valido" });
            } else {
                usuario.password = undefined;
                res.status(200).json(usuario);
            }

        } catch (err) {
            res.status(400).json({ "message": err.message })
        }
    }
}