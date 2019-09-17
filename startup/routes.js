const cookieParser = require('cookie-parser');
const express = require('express');
const main = require('../routes/main');
const plan = require('../routes/plan');
const auth = require('../routes/auth');
const customer = require('../routes/customer');
const admin = require('../routes/admin');

module.exports = function(app) {
  app.set('view engine', 'pug');
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.static('public'));
  app.use(cookieParser('MY SECRET'));
  app.use('/api/main', main);
  app.use('/api/plan', plan);
  app.use('/api/login', auth);
  app.use('/api/customer', customer);
  app.use('/api/admin', admin);
}
