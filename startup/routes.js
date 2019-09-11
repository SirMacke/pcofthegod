const express = require('express');
const main = require('../routes/main');
const plan = require('../routes/plan');
const auth = require('../routes/auth');

module.exports = function(app) {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.static('public'))
  app.use('/api/main', main);
  app.use('/api/plan', plan);
  app.use('/api/login', auth);
}
