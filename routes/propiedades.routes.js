let express = require('express')
let router = express.Router()

const Propiedad = require('../models/propiedades.routes')

const controladorPropiedades = require('./controllers/propiedades.controller')

router.post('/',controladorPropiedades.createPropiedad)

router.get('/',controladorPropiedades.getPropiedad)

router.get('/',controladorPropiedades.getPropiedadById)

router.put('/',controladorPropiedades.updatePropiedadById)

router.delete('/',controladorPropiedades.deletePropiedadById)

module.export = router;