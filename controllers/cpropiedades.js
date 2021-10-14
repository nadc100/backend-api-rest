const Propiedad = require("../models/propmodel");

async function listarPropiedades(req, res) {
   try {
      const propiedades = await Propiedad.find();
      if (propiedades.length) {
         res.status(200).send(propiedades)
      } else {
         res.status(204).send({ message: 'NO CONTENT' });
      }
   } catch (err) {
      res.status(500).send(err);
   }
}

cesardiaz-utp

async function crearPropiedad(req, res) {
   try {
      let propiedad = await Propiedad.create(req.body);
      res.status(201).json(propiedad);
   } catch (err) {
      res.status(500).send(err)
   }
}

function actualizarPropiedad(req, res) {
   if (req.body.error) return res.status(500).send({
      error
   });
   if (!req.body.propiedades) return res.status(404).send({
      message: 'Not Found'
   });
   let propiedad = req.body.propiedades[0];
   propiedad = Object.assign(propiedad, req.body);
   propiedad.save()
      .then(product => res.status(200).send({
         message: 'Propiedad actualizada',
         product
      })).catch(err => res.status(500).send({
         err
      }))
}

function borrarPropiedad(req, res) {
   if (req.body.error) return res.status(500).send({
      error
   });
   if (!req.body.propiedades) return res.status(404).send({
      message: 'Propiedad no encontrada'
   });
   req.body.propiedad[0].remove()
      .then(propiedad => {
         res.status(200).send({
            message: 'Propiedad Borrada',
            propiedad
         })
      }).catch(err => res.status(500).send({
         err
      }));
}

function listarPropiedadesPorId(req, res, next) {
   let query = {};
   Propiedad.find(req.params.id).then(propiedades => {
      if (!propiedades.length) return next();
      req.body.propiedades = propiedades;
      return next();
   }).catch(err => {
      req.body.error = err;
      next();
   })
}

module.exports = {
   listarPropiedades,
   crearPropiedad,
   actualizarPropiedad,
   borrarPropiedad,
   listarPropiedadesPorId,
}