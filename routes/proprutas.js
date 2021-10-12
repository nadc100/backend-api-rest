const express = require('express');
const router = express.Router();
const API = require('../controllers/cpropiedades');

router.get('/',API.listarPropiedades);
router.get('/:id',API.listarPropiedadesPorId);
router.post('/',API.crearPropiedad);
router.patch('/:id',API.actualizarPropiedad);
router.delete('/:id',API.borrarPropiedad);

module.exports = router;