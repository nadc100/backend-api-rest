const Propiedad = require('../models/propmodel');

module.exports = class API {
   static async listarPropiedades(req, res) {
      res.send("listar")
   }
   static async listarPropiedadesPorId(req, res) {
      res.send("listar por id")
   }
   static async crearPropiedad(req, res) {
      res.send("crear")
   }
   static async actualizarPropiedad(req, res) {
      res.send("actualizar")
   }
   static async borrarPropiedad(req, res) {
      res.send("borrar")
   }
}