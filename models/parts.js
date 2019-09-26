const Joi = require('joi');
const mongoose = require('mongoose');

const Parts = mongoose.model('Parts', new mongoose.Schema({
  case: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255
  },
  img_case: {
    type: String,
    minlength: 5,
    maxlength: 255
  },
  mb: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255
  },
  img_mb: {
    type: String,
    minlength: 5,
    maxlength: 255
  },
  cpu: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255
  },
  img_cpu: {
    type: String,
    minlength: 5,
    maxlength: 255
  },
  cooler: {
    type: String,
    minlength: 5,
    maxlength: 255
  },
  img_cooler: {
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
  img_ram: {
    type: String,
    minlength: 5,
    maxlength: 255
  },
  gpu: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255
  },
  img_gpu: {
    type: String,
    minlength: 5,
    maxlength: 255
  },
  hdd: {
    type: String,
    minlength: 5,
    maxlength: 255
  },
  img_hdd: {
    type: String,
    minlength: 5,
    maxlength: 255
  },
  ssd: {
    type: String,
    minlength: 5,
    maxlength: 255
  },
  img_ssd: {
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
  img_psu: {
    type: String,
    minlength: 5,
    maxlength: 255
  },
  cables: {
    type: String,
    minlength: 5,
    maxlength: 255
  },
  img_cables: {
    type: String,
    minlength: 5,
    maxlength: 255
  },
  fans: {
    type: String,
    minlength: 5,
    maxlength: 255
  },
  img_fans: {
    type: String,
    minlength: 5,
    maxlength: 255
  },
  leds: {
    type: String,
    minlength: 5,
    maxlength: 255
  },
  img_leds: {
    type: String,
    minlength: 5,
    maxlength: 255
  },
  os: {
    type: String,
    minlength: 5,
    maxlength: 255
  },
  img_os: {
    type: String,
    minlength: 5,
    maxlength: 255
  },
  extra: {
    type: String,
    minlength: 5,
    maxlength: 255
  },
  img_extra: {
    type: String,
    minlength: 5,
    maxlength: 255
  },
  img: [String]
}));

function validateParts(parts) {
  const schema = {
    case: Joi.string().min(5).max(255).required(),
    img_case: Joi.string().min(5).max(255),
    mb: Joi.string().min(5).max(255).required(),
    img_mb: Joi.string().min(5).max(255),
    cpu: Joi.string().min(5).max(255).required(),
    img_cpu: Joi.string().min(5).max(255),
    cooler: Joi.string().min(5).max(255),
    img_cooler: Joi.string().min(5).max(255),
    ram: Joi.string().min(5).max(255).required(),
    img_ram: Joi.string().min(5).max(255),
    gpu: Joi.string().min(5).max(255).required(),
    img_gpu: Joi.string().min(5).max(255),
    hdd: Joi.string().min(5).max(255),
    img_hdd: Joi.string().min(5).max(255),
    ssd: Joi.string().min(5).max(255),
    img_ssd: Joi.string().min(5).max(255),
    psu: Joi.string().min(5).max(255).required(),
    img_psu: Joi.string().min(5).max(255),
    cables: Joi.string().min(5).max(255),
    img_cables: Joi.string().min(5).max(255),
    fans: Joi.string().min(5).max(255),
    img_fans: Joi.string().min(5).max(255),
    leds: Joi.string().min(5).max(255),
    img_leds: Joi.string().min(5).max(255),
    os: Joi.string().min(5).max(255),
    img_os: Joi.string().min(5).max(255),
    extra: Joi.string().min(5).max(255),
    img_extra: Joi.string().min(5).max(255),
    img: Joi.array(),

    computerPrice: Joi.allow(),
    servicePrice: Joi.allow(),
    shippingPrice: Joi.allow(),
    totalPrice: Joi.allow()
  }

  return Joi.validate(parts, schema);
}

exports.validateParts = validateParts;
exports.Parts = Parts;
