const { Router } = require('express');
const router = Router();

const cauth = require('./controllers/cauth');

router.post('/login', cauth.login);

module.exports = router;