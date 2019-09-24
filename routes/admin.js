const auth = require('../middleware/auth');
const admin = require('../middleware/admin');
const validate = require('../middleware/validate');
const {User} = require('../models/user');
const {Plan} = require('../models/plan');
const {validateParts, Parts} = require('../models/parts');
const {validatePrice, Price} = require('../models/price');
const {Order} = require('../models/order');
const _ = require('lodash');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.get('/', [auth, admin], async (req, res) => {
  User.find({}, function(err, users) {
    var userMap = users;
    userMap.shift();

    Plan.find({}, function(err, plans) {
      var planMap = plans;

      res.render('admin', { users: userMap, plans: planMap});
    });
  }).select('-password');
});

router.get('/:id', [auth, admin], async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) return res.status(404).send('Invalid user.');

  const plan = await Plan.findById(user.plan);
  if (!user) return res.status(404).send('Invalid plan.');

  res.render('admin_plan', { user: user, plan: plan });
});

router.post('/:id', [auth, admin, validate(validateParts), validate(validatePrice)], async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) return res.status(404).send('Invalid user.');

  let parts = new Parts(_.pick(req.body, ['case', 'mb', 'cpu', 'cooler', 'ram', 'gpu', 'hdd', 'ssd', 'psu', 'cables', 'fans', 'led', 'os', 'extra']));
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
