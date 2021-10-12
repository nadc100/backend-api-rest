const Propiedad = require('../models/propmodel');
const mongoose = require('mongoose');

module.exports = class API {
   static async crearPropiedad(req, res) {
      const nuevaPropiedad = new Propiedad(re.body);
      const propiedadGravada = await nuevaPropiedad.save();
      res.json(propiedadGravada);
   };

   static async listarPropiedades(req, res) {
      res.send("listar")
   };

   static async listarPropiedadesPorId(req, res) {
      try {
         const propiedades = await Propiedad.find();
         res.status(200).json(propiedades)
      } catch (error) {
         res.status(404).json({message:err.message});
      }
   };

   static async actualizarPropiedad(req, res) {
      res.send("actualizar")
   };

   static async borrarPropiedad(req, res) {
      res.send("borrar")
   };
}