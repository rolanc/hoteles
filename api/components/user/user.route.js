const express = require('express'),
      router = express.Router(),
      users = require('./user.api');

router.param('id', (req, res, next, id) => {
  req.body.id = id;
  next();
});

router.route('/save_user')
  .post((req, res) => {
    users.registerUser(req,res);
});

router.route('/get_all_users')
  .get((req, res) => {
    users.listUser(req,res);
});

router.route('/update_users')
  .put((req, res) => {
    users.updateUser(req,res);
});

module.exports = router;