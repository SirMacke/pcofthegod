const auth = require('../middleware/auth');
const {User} = require('../models/user');
const {Plan} = require('../models/plan');
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


  res.render('customer', { user: user, plan: plan });
})

module.exports = router;
