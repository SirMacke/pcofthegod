const auth = require('../middleware/auth');
const admin = require('../middleware/admin');
const {User} = require('../models/user');
const {Plan} = require('../models/plan');
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
  });




});

router.get('/:id', [auth, admin], async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) return res.status(404).send('Invalid user.');

  const plan = await Plan.findById(user.plan);
  if (!user) return res.status(404).send('Invalid plan.');

  res.render('admin_plan', { usecases: plan.gaming, sliderOne: plan.sliderOne, sliderTwo: plan.sliderTwo, case1: plan.case, mainColor: plan.mainColor, secondColor: plan.secondColor, budget: plan.budget, name: plan.name, resolution: plan.resolution, fps: plan.fps, setting: plan.setting, comment: plan.comment });
});

module.exports = router;
