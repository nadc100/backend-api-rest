let express = require('express')
let router = express.Router()

import * as controladorPropiedades from '../controllers/propiedades.controller'

router.post('/',controladorPropiedades.createPropiedad)

router.get('/',controladorPropiedades.getPropiedad)

router.get('/',controladorPropiedades.getPropiedadById)

router.put('/',controladorPropiedades.updatePropiedadById)

router.delete('/',controladorPropiedades.deletePropiedadById)

module.export = router;