const HotelModel = require('./hotel.model');

module.exports.registerHotel = (req, res) => {
    console.log(req);
    var newHotel = Object.assign(new HotelModel(), req.body);

    newHotel.save((err) => {
        if (err) {
            res.json({ success: false, msj: 'Ha ocurrido un error en el registro de usuarios' + err });
        } else {
            res.json({ success: true, msj: 'Se registró el usuario correctamente' });
        }
    });
};

module.exports.listHotel = (req, res) => {
    HotelModel.find().then((hotels) => {
        res.send(hotels);
    });
};

module.exports.updateHotel = (req, res) => {
    HotelModel.findByIdAndUpdate(req.body._id, { $set: req.body }, (err, user) => {
        if (err) {
            res.json({ success: false, msg: 'No se ha actualizado.' + handleError(err) });

        } else {
            res.json({ success: true, msg: 'Se ha actualizado correctamente.' + res });
        }
    });
};