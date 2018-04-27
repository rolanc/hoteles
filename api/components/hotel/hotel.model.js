const mongoose = require('mongoose');

var HotelSchema = new mongoose.Schema({
    'tipoHotel' : { type: String, required: true },
    'nombreHotel' : { type: String, required: true },
    'foto' : { type: String, required: true },
    'latitud' : { type: String, required: true },
    'longitud' : { type: String, required: true },
    'provincia' : { type: String, required: true },
    'canton' : { type: String, required: true },
    'distrito' : { type: String, required: true },
    'direccion' : { type: String, required: true },
    'telefonoServicioCliente' : { type: String, required: true },
    'correoServicioCliente' : { type: String, required: true },
    'telefonoReservacion' : { type: String, required: true },
    'correoReservacion' : { type: String, required: true}
    
});

module.exports = mongoose.model('Hotel', HotelSchema);