const { Router } = require('express');
const router = Router();

const cpropiedades = require('./controllers/cpropiedades');

router.post('/',cpropiedades.createPropiedad)

router.get('/',cpropiedades.getPropiedad)

router.get('/',cpropiedades.getPropiedadById)

router.put('/',cpropiedades.updatePropiedadById)

router.delete('/',cpropiedades.deletePropiedadById)

module.exports = router;