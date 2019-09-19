const auth = require('../middleware/auth');
const admin = require('../middleware/admin');
const {User} = require('../models/user');
const {Plan} = require('../models/plan');
const express = require('express');
const router = express.Router();

router.get('/', [auth, admin], async (req, res) => {
  const user = await User.findById('5d7f8954b64ccc3948244920');
  const plan = await Plan.findById(user.plan);

  console.log(plan.dateCreated)

  res.render('admin', { firstName: user.firstName, lastName: user.lastName, country: user.country, budget: plan.budget, date: plan.dateCreated });
});

module.exports = router;
