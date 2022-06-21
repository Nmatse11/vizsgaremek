const mongoose = require('mongoose');

const OrderFastfoodItemSchema = mongoose.Schema({
  productID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Fastfood',
    required: true
  },
  notes: {
    type: String,
    required: false
  },
}, {
  timeStamps: true
});

const OrderFastfoodSchema = mongoose.Schema({
  date: {
    type: String,
    required: true
  },
  customerID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Customer',
    required: true
  },
  order: [OrderFastfoodItemSchema],
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

module.exports = mongoose.model('OrderFastfood', OrderFastfoodSchema);