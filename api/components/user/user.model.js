const mongoose = require ('mongoose');

var UsuarioSchema = new mongoose.Schema({
    primerNombre : {type: String, required: true},
    segundoNombre : {type: String},
    primerApellido : {type: String, required: true},
    segundoApellido : {type: String},
    cedula : {type: String, required: true, unique: true},
    correo : {type: String, required: true},
    contrasenna : {type: String, required: true},
    rol : {type: String, required: true},
    edad : {type: Date},
    telefono : {type: String}
});

module.exports = mongoose.model('Usuario', UsuarioSchema);