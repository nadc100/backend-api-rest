const express = require('express');
const router = express.Router();
const crearCorreoNewsLetter = require('../controllers/correoscontroller');

router.post('/', crearCorreoNewsLetter);

module.exports = router;