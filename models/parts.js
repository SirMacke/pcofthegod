const Joi = require('joi');
const mongoose = require('mongoose');

const Parts = mongoose.model('Parts', new mongoose.Schema({
  case: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255
  },
  mb: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255
  },
  cpu: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255
  },
  cooler: {
    type: String,
    minlength: 5,
    maxlength: 255
  },
  ram: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255
  },
  gpu: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255
  },
  hdd: {
    type: String,
    minlength: 5,
    maxlength: 255
  },
  ssd: {
    type: String,
    minlength: 5,
    maxlength: 255
  },
  psu: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255
  },
  cables: {
    type: String,
    minlength: 5,
    maxlength: 255
  },
  fans: {
    type: String,
    minlength: 5,
    maxlength: 255
  },
  leds: {
    type: String,
    minlength: 5,
    maxlength: 255
  },
  os: {
    type: String,
    minlength: 5,
    maxlength: 255
  },
  extra: {
    type: String,
    minlength: 5,
    maxlength: 255
  }
}));

function validateParts(parts) {
  const schema = {
    case: Joi.string().min(5).max(255).required(),
    mb: Joi.string().min(5).max(255).required(),
    cpu: Joi.string().min(5).max(255).required(),
    cooler: Joi.string().min(5).max(255),
    ram: Joi.string().min(5).max(255).required(),
    gpu: Joi.string().min(5).max(255).required(),
    hdd: Joi.string().min(5).max(255),
    ssd: Joi.string().min(5).max(255),
    psu: Joi.string().min(5).max(255).required(),
    cables: Joi.string().min(5).max(255),
    fans: Joi.string().min(5).max(255),
    leds: Joi.string().min(5).max(255),
    os: Joi.string().min(5).max(255),
    extra: Joi.string().min(5).max(255),

    computerPrice: Joi.allow(),
    servicePrice: Joi.allow(),
    shippingPrice: Joi.allow(),
    totalPrice: Joi.allow()
  }

  return Joi.validate(parts, schema);
}

exports.validateParts = validateParts;
exports.Parts = Parts;
