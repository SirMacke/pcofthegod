const auth = require('../middleware/auth');
const {User} = require('../models/user');
const {Plan} = require('../models/plan');
const {Order} = require('../models/order');
const {Parts} = require('../models/parts');
const {Price} = require('../models/price');
const jwt = require('jsonwebtoken');
const config = require('config');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.get('/', auth, async (req, res) => {
  var token = req.signedCookies.tokenId;
  const decoded = jwt.verify(token, config.get('jwtPrivateKey'));

  const user = await User.findById(decoded._id);
  if (!user) return res.status(404).send('Invalid user.');

  const plan = await Plan.findById(user.plan);
  if (!plan) return res.status(404).send('Invalid plan.');

  const order = await Order.findById(user.order);
  if (!order) return res.status(404).send('Invalid order.');

  const parts = await Parts.findById(order.parts);
  if (!parts) return res.status(404).send('Invalid parts.');

  const price = await Price.findById(order.price);
  if (!price) return res.status(404).send('Invalid price.');

  res.render('customer', { user: user, plan: plan, parts: parts, price: price});
})

module.exports = router;
