const { Router } = require('express');
const router = Router();

const cuser = require('./controllers/cuser');

router.get('/usuarios', cuser.getUsuario)

module.exports = router;