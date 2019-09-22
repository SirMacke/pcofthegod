const Joi = require('joi');
const mongoose = require('mongoose');
const {Parts} = require('./parts');
const {Price} = require('./price');

const Order = mongoose.model('Order', new mongoose.Schema({
  parts: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Parts',
    required: true
  },
  price: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Price',
    required: true
  },
  bought: {
    type: Boolean,
    default: false,
    required: true
  },
  delivered: {
    type: Boolean,
    default: false,
    required: true
  },
  dateCreated: {
    type: Date,
    required: true,
    default: Date.now
  }
}));

function validateOrder(order) {
  const schema = {
    parts: Joi.objectId().required(),
    price: Joi.objectId().required(),
    bought: Joi.boolean().required(),
    delivered: Joi.boolean().required(),
    dateCreated: Joi.Date().required()
  }

  return Joi.validate(order, schema);
}

exports.Order = Order;
exports.validateOrder = validateOrder;
