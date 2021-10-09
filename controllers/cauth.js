
const Rol = require('./models/mrole');

export const registro = async (req, res) => {
    const {rol} = req.body;

    const nuevoRol = new User({
        rol
    });
    const rolSalvado = await nuevoRol.save();
};

module.exports = registro;