const auth = require('../middleware/auth');
const admin = require('../middleware/admin');
const validate = require('../middleware/validate');
const {User} = require('../models/user');
const {Plan} = require('../models/plan');
const {Order} = require('../models/order');
const {validateParts, Parts} = require('../models/parts');
const {validatePrice, Price} = require('../models/price');
const multer = require('multer');
const _ = require('lodash');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.get('/', [auth, admin], async (req, res) => {
  User.find({}, function(err, users) {
    var userMap = users;
    userMap.shift();

    var userData = [];

    // Fungerar inte...

    for (let i = 0; i < userMap.length; i++) {
      var user = JSON.parse(JSON.stringify(userMap[i]));
      user.planData = Plan.find({ _id: user.plan }, function(err, plan) { var planData = plan });
      user.orderData = Order.find({ _id: user.order }, function(err, order) { var orderData = order });

      userData.push(user);
      console.log(user);
    }

    res.render('admin', { users: userData });
  }).select('-password');
});

router.get('/:id', [auth, admin], async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) return res.status(404).send('Invalid user.');

  const plan = await Plan.findById(user.plan);
  if (!user) return res.status(404).send('Invalid plan.');

  res.render('admin_plan', { user: user, plan: plan });
});

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './uploads');
  },
  filename: function(req, file, cb) {
    cb(null, new Date().toDateString() + '-' + file.originalname)
  }
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(null, false);
  }
}

const upload = multer({ storage: storage, fileFilter: fileFilter });

// , validate(validatePrice), validate(validateParts),

router.post('/:id', [auth, admin, upload.single('img-case')], async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) return res.status(404).send('Invalid user.');
  if (user.order) return res.status(400).send('Order already sent.');

  let parts = new Parts(_.pick(req.body, ['case', 'mb', 'cpu', 'cooler', 'ram', 'gpu', 'hdd', 'ssd', 'psu', 'cables', 'fans', 'leds', 'os', 'extra']));
  let images = [req.file.path];
  parts.img = images
  await parts.save();

  let price = new Price(_.pick(req.body, ['computerPrice', 'servicePrice', 'shippingPrice', 'totalPrice']));
  await price.save();

  let order = new Order({
    parts: parts._id,
    price: price._id
  });
  await order.save();

  user.order = order._id;
  await user.save();

  res.send(user);
});

module.exports = router;
