const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const rutaSchema = new Schema({
    nombre: String,
    pokemon: String,
    region: String
})

//Creamos el modelo
const Ruta = mongoose.model('ruta', rutaSchema, "ruta");

module.exports = Ruta;