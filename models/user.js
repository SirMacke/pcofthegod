const Joi = require('joi');
const config = require('config');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const {Plan} = require('./plan');
const {Order} = require('./order');

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50
  },
  lastName: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50
  },
  country: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50
  },
  email: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 1024
  },
  isAdmin: {
    type: Boolean,
    default: false,
    required: true
  },
  userCreated: {
    type: Date,
    default: Date.now,
    required: true
  },
  plan: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Plan',
    required: true
  },
  order: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Order'
  }
});

userSchema.methods.generateAuthToken = function() {
  const token = jwt.sign({ _id: this._id, isAdmin: this.isAdmin },
  config.get('jwtPrivateKey'));
  return token;
}

const User = mongoose.model('User', userSchema);

function validateUser(user) {
  const schema = {
    firstName: Joi.string().min(3).max(50).required(),
    lastName: Joi.string().min(3).max(50).required(),
    country: Joi.string().min(3).max(50).required(),
    email: Joi.string().min(5).max(255).required().email(),
    password: Joi.string().min(5).max(255).required(),
    isAdmin: Joi.boolean(),
    userCreated: Joi.date(),

    streaming: Joi.allow(),
    gaming: Joi.allow(),
    productivity: Joi.allow(),
    sliderOne: Joi.allow(),
    sliderTwo: Joi.allow(),
    case: Joi.allow(),
    mainColor: Joi.allow(),
    //secondColor: Joi.allow(),
    budget: Joi.allow(),
    name: Joi.allow(),
    resolution: Joi.allow(),
    fps: Joi.allow(),
    setting: Joi.allow(),
    comment: Joi.allow(),
    dateCreated: Joi.allow()
  }

  return Joi.validate(user, schema);
}

exports.validateUser = validateUser;
exports.User = User;
