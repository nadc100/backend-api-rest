const express = require("express")
const router = express.Router()
const controladorUsuarios = require('./controllers/user.controller')
const Usuario = require('./models/user')

// Get all posts
router.get('/usuarios', controladorUsuarios.getUsuario)

module.exports = router;