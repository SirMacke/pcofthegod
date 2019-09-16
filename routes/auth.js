const Joi = require('joi');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('config');
const mongoose = require('mongoose');
const {User} = require('../models/user');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.sendFile('login.html', { root: './public' });
});

router.post('/', async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send('Invalid email or password');

  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) return res.status(400).send('Invalid email or password');

  const token = user.generateAuthToken();

  // Skickar bara dokumenten istället för att redirecta till admin.js eller customer.js
  // Alltså så valideras inte x-auth-token för att den bara skickar websidorna
  // Hitta ett sett så att den redirectar med x-auth-token

  res.cookie('tokenId', token, { signed: true });

  const decoded = jwt.verify(token, config.get('jwtPrivateKey'));
  if (decoded.isAdmin) {
    res.redirect('./admin');
  } else {
    res.redirect('./customer');
  }
});

function validate(req) {
  schema = {
    email: Joi.string().min(5).max(255).required().email(),
    password: Joi.string().min(5).max(255).required()
  }

  return Joi.validate(req, schema);
}

module.exports = router;
