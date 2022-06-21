const mongoose = require('mongoose');

const OrderMenuItemSchema = mongoose.Schema({
  week: {
    type: Number,
    required: true,
    default: 1
  },
  menuCode: {
    type: String,
    required: true,
    default: 'A'
  },
  portion: {
    type: Number,
    required: true,
    default: 1
  },
}, {
  timeStamps: true
});

const OrderMenuSchema = mongoose.Schema({
  date: {
    type: String,
    required: true
  },
  customerID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Customer',
    required: true
  },
  order: [OrderMenuItemSchema],
  amount: {
    type: Number,
    required: true,
    default: 1000
  },
  shipping: {
    type: String,
    required: true,
    default: 'free'
  },
  status: {
    type: String,
    required: true,
    default: 'new'
  },
}, {
  timeStamps: true
});

module.exports = mongoose.model('OrderMenu', OrderMenuSchema);