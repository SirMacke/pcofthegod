const Joi = require('joi');
const mongoose = require('mongoose');

const Price = mongoose.model('Price', new mongoose.Schema({
  computerPrice: {
    type: Number,
    required: true,
    min: 500,
    max: 10000
  },
  servicePrice: {
    type: Number,
    required: true,
    min: 50,
    max: 200
  },
  shippingPrice: {
    type: Number,
    required: true,
    min: 0,
    max: 1000
  },
  totalPrice: {
    type: Number,
    required: true,
    min: 550,
    max: 11200
  }
}));

function validatePrice(price) {
  const schema = {
    computerPrice: Joi.number().min(550).max(10000).required(),
    servicePrice: Joi.number().min(50).max(200).required(),
    shippingPrice: Joi.number().min(0).max(1000).required(),
    totalPrice: Joi.number().min(550).max(11200).required(),

    case: Joi.allow(),
    img_case: Joi.allow(),
    mb: Joi.allow(),
    img_mb: Joi.allow(),
    cpu: Joi.allow(),
    img_cpu: Joi.allow(),
    cooler: Joi.allow(),
    img_cooler: Joi.allow(),
    ram: Joi.allow(),
    img_ram: Joi.allow(),
    gpu: Joi.allow(),
    img_gpu: Joi.allow(),
    hdd: Joi.allow(),
    img_hdd: Joi.allow(),
    ssd: Joi.allow(),
    img_ssd: Joi.allow(),
    psu: Joi.allow(),
    img_psu: Joi.allow(),
    cables: Joi.allow(),
    img_cables: Joi.allow(),
    fans: Joi.allow(),
    img_fans: Joi.allow(),
    leds: Joi.allow(),
    img_leds: Joi.allow(),
    os: Joi.allow(),
    img_os: Joi.allow(),
    extra: Joi.allow(),
    img_extra: Joi.allow(),
    img: Joi.array(),
  }

  return Joi.validate(price, schema);
}

exports.validatePrice = validatePrice;
exports.Price = Price;
