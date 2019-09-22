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
    mb: Joi.allow(),
    cpu: Joi.allow(),
    cooler: Joi.allow(),
    ram: Joi.allow(),
    gpu: Joi.allow(),
    ssd: Joi.allow(),
    hdd: Joi.allow(),
    psu: Joi.allow(),
    cables: Joi.allow(),
    fans: Joi.allow(),
    led: Joi.allow(),
    extra: Joi.allow()
  }

  return Joi.validate(price, schema);
}

exports.Price = Price;
exports.validatePrice = validatePrice;
