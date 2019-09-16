const _ = require('lodash');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const {validatePlan, Plan} = require('../models/plan');
const {validateUser, User} = require('../models/user');
const auth = require('../middleware/auth');
const validate = require('../middleware/validate');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.sendFile('plan.html', { root: './public' });
});

router.post('/', [validate(validatePlan), validate(validateUser)], async (req, res) => {
  let plan = new Plan(_.pick(req.body, ['streaming', 'gaming', 'productivity', 'sliderOne', 'sliderTwo', 'case', 'mainColor', 'budget', 'name', 'resolution', 'fps', 'setting', 'comment']));
  await plan.save();


  let user = await User.findOne({ email: req.body.email });
  if (user) return res.status(400).send('User already registered');

  user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    country: req.body.country,
    email: req.body.email,
    password: req.body.password,
    plan: plan._id
  });

  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);
  await user.save();

  const token = user.generateAuthToken(user);
  res.header('x-auth-token', token).sendFile('customer.html', { root: './public' });
});

module.exports = router;
