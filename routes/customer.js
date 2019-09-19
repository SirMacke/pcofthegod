const auth = require('../middleware/auth');
const {User} = require('../models/user');
const {Plan} = require('../models/plan');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.get('/', auth, async (req, res) => {
  const user = await User.findById('5d7f8954b64ccc3948244920');
  const plan = await Plan.findById(user.plan);

  res.render('customer', { usecases: plan.gaming, sliderOne: plan.sliderOne, sliderTwo: plan.sliderTwo, case1: plan.case, mainColor: plan.mainColor, secondColor: plan.secondColor, budget: plan.budget, name: plan.name, resolution: plan.resolution, fps: plan.fps, setting: plan.setting, comment: plan.comment });
})

module.exports = router;
