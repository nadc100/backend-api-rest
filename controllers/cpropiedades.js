const db = require('./db');
const Propiedad = require('./models/mpropiedades');

export const createPropiedad = async (req, res) => {
    const { tipo, estrato, estado, precio, disponible } = req.body
    const nuevaPropiedad = Propiedad(id,tipo, estrato, estado, precio, disponible)
    const propiedadGuardada = await db.nuevaPropiedad.save()
    res.status(201).json(propiedadGuardada)
}

export const getPropiedad = async (req, res) => {
    const propiedades = await db.Propiedad.find();
    res.json(propiedades)
}

export const getPropiedadById = async (req, res) => {
    const propiedad = await db.Propiedad.findById(req.params.productId);
    res.status(200).json(propiedad)
}

export const updatePropiedadById = async (req, res) => {
    const propiedadActualizada = await db.Propiedad.findByIdAndUpdate(req.params.productId,req.body,{new:true});
    res.status(200).json(propiedadActualizada);
}

export const deletePropiedadById = async (req, res) => {
    const { propiedadid } = req.params;
    await db.Propiedad.findByIdAndDelete(propiedadid);
}

module.exports = cpropiedades;