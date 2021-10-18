const mongoose = require('mongoose');

const usuarioSchema = mongoose.Schema({
    'username': String,
    'name': String,
    'password': String,
    'role': String
});

module.exports = mongoose.model('Usuario', usuarioSchema);