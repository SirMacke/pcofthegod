const auth = require('../middleware/auth');
const {User} = require('../models/user');
const {Plan} = require('../models/plan');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.get('/', auth, async (req, res) => {
  const user = await User.findById('5d7f8954b64ccc3948244920');
  const plan = await Plan.findById(user.plan);
  console.log(plan);

  res.render('customer', { usecases: plan.gaming });

  console.log('Done');
})

module.exports = router;
