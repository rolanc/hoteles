const express = require('express'),
      router = express.Router(),
      hotels = require('./hotel.api');

router.param('id', (req, res, next, id) => {
  req.body._id = id;
  next();
});

router.route('/save_hotel')
  .post((req, res) => {
    hotels.registerHotel(req,res);
});

router.route('/get_all_hotels')
  .get((req, res) => {
    hotels.listHotel(req,res);
});

router.route('/update_hotel')
  .put((req, res) => {
    hotels.updateHotel(req,res);
});

module.exports = router;