const Joi = require('joi');
const mongoose = require('mongoose');

const Plan = mongoose.model('Plan', new mongoose.Schema({
  streaming: {
    type: String,
    minlength: 0,
    maxlength: 30
  },
  gaming: {
    type: String,
    minlength: 0,
    maxlength: 30
  },
  productivity: {
    type: String,
    minlength: 0,
    maxlength: 30
  },
  sliderOne: {
    type: Number,
    required: true,
    min: 0,
    max: 100
  },
  sliderTwo: {
    type: Number,
    required: true,
    min: 0,
    max: 100
  },
  case: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 30
  },
  mainColor: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 30
  },
  // secondColor: {
  //   type: Number,
  //   required: true,
  //   min: 0,
  //   max: 8
  // },
  budget: {
    type: Number,
    min: 500,
    max: 10000
  },
  name: {
    type: String,
    maxlength: 30
  },
  resolution: {
    type: String,
    minlength: 0,
    maxlength: 10
  },
  fps: {
    type: String,
    minlength: 0,
    maxlength: 10
  },
  setting: {
    type: String,
    minlength: 0,
    maxlength: 10
  },
  comment: {
    type: String,
    maxlength: 1000
  },
  dateCreated: {
    type: Date,
    required: true,
    default: Date.now
  }
}));

function validatePlan(plan) {
  const schema = {
    streaming: Joi.string(),
    gaming: Joi.string(),
    productivity: Joi.string(),
    sliderOne: Joi.number().min(0).max(100).required(),
    sliderTwo: Joi.number().min(0).max(100).required(),
    case: Joi.string().min(3).max(30).required(),
    mainColor: Joi.string().min(3).max(30).required(),
    //secondColor: Joi.number().min(0).max(8).required(),
    budget: Joi.number().min(500).max(10000).allow(''),
    name: Joi.string().allow(''),
    resolution: Joi.string(),
    fps: Joi.string(),
    setting: Joi.string(),
    comment: Joi.string().max(1000).allow(''),
    dateCreated: Joi.date(),

    firstName: Joi.allow(),
    lastName: Joi.allow(),
    country: Joi.allow(),
    email: Joi.allow(),
    password: Joi.allow(),
    isAdmin: Joi.allow(),
    userCreated: Joi.allow()
  }

  return Joi.validate(plan, schema);
}

exports.validatePlan = validatePlan;
exports.Plan = Plan;
