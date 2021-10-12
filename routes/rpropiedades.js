const { Router } = require('express');
const router = Router();
const mongoose = require('mongoose');
//const Propiedad = require('./models/mpropiedades');
router.get('/', async (req, res) => {
   try {
      const Propiedad = await Propiedad.find();
      console.log(Propiedad)
      res.send(Propiedad);
   } catch (err) {
      return res.status(500).send({
         message: err.message
      });
   }
});


module.exports = router;