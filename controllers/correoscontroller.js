const Correo = require("../models/correomodel");

module.exports = async function crearCorreoNewsLetter(req, res) {
    try {
        let correo = await Correo.create(req.body);
        res.status(201).json(correo);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}