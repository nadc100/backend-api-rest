const mongoose = require("mongoose");

const correosSchema = mongoose.Schema({
    "correo": String,
});

module.exports = mongoose.model("Correo", correosSchema, 'correosnewsletter');