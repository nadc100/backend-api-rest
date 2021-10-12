const express = require('express');
const router = express.Router();
const Propiedad = require('../models/propmodel');
const app = express();


async function listarPropiedades(req, res) {
   Propiedad.find({}).then(propiedades => {
         if (propiedades.length) return res.status(200).send({ propiedades })
         return res.status(204).send({ message: 'NO CONTENT' });
      }).catch(err => res.status(500).send({ err }))
}

function crearPropiedad(req, res) {
   let propiedad = new Propiedad(req.body);
   propiedad.save().then(propiedad => res.status(201).send({ propiedad })).catch(err => res.status(500).send({ err }))
}

function show(req, res) {
   if (req.body.error) return res.status(500).send({ error });
   if (!req.body.propiedades) return res.status(404).send({ message: 'Not Found' });
   let propiedades = req.body.propiedades;
   return res.status(200).send({ propiedades });
}

function actualizarPropiedad(req, res) {
   if (req.body.error) return res.status(500).send({ error });
   if (!req.body.propiedades) return res.status(404).send({ message: 'Not Found' });
   let product = req.body.propiedades[0];
   product = Object.assign(product, req.body);
   product.save()
      .then(product => res.status(200).send({ message: 'Product Updated', product })
      ).catch(err => res.status(500).send({ err }))
}

function borrarPropiedad(req, res) {
   if (req.body.error) return res.status(500).send({ error });
   if (!req.body.propiedades) return res.status(404).send({ message: 'Not Found' });
   req.body.propiedades[0].remove()
      .then(product => {
         res.status(200).send({ message: 'Ppropiedad Borrada', product })
      }
      ).catch(err => res.status(500).send({ err }));
}

function listarPropiedadesPorId(req, res, next) {
   let query = {};
   Propiedad.find(req.params.id).then(propiedades => {
      if (!propiedades.length) return next();req.body.propiedades = propiedades;
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
