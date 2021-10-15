const Propiedad = require("../models/propmodel");

module.exports = class API {
   static async listarPropiedades(req, res) {
      try {
         const propiedades = await Propiedad.find();
         res.status(200).json(propiedades);
      } catch (err) {
         res.status(404).json({ message: err.message });
      }
   }

   static async listarPropiedadesPorId(req, res) {
      try {
         const Id = req.params.code;
         const propiedad = await Propiedad.findOne({ "Id": Id });
         if (propiedad == null) {
            res.status(404).json({ message: "Propiedad no encontrada" });
         } else {
            res.status(200).json(propiedad);
         }
      } catch (err) {
         res.status(400).json({ message: err.message });
      }
   }

   static async crearPropiedad(req, res) {
      try {
         let propiedad = await Propiedad.create(req.body);
         res.status(201).json(propiedad);
      } catch (err) {
         res.status(500).json({ message: err.message });
      }
   }

   static async actualizarPropiedad(req, res) {
      try {
         const Id = req.params.id;
         const propiedad = req.body;
         await Propiedad.updateOne({ _id: Id }, propiedad);
         res.status(200).json()
      } catch (err) {
         res.status(400).json({ message: err.message })
      }
   }

   static async borrarPropiedad(req, res) {
      try {
         const Id = req.params.id;
         await Propiedad.deleteOne({ _id: Id });
         res.status(200).json();
      } catch (err) {
         res.status(400).json({ message: err.message });
      }
   }

   static async cambiarImagen(req, res) {
      try {
         const Id = req.params.id;
         const imageName = req.file.filename;
         await Propiedad.updateOne({ "code": Id }, { "imageUrl": "/" + imageName });
         res.status(200).json();
      } catch (err) {
         res.status(400).json({ message: err.message });
      }
   }

}