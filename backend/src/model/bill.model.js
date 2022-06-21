const mongoose = require('mongoose');

const BillSchema = mongoose.Schema({
  orderDate: {
    type: String,
    required: true
  },
  billDate: {
    type: String,
    required: true
  },
  orderID: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  type: {
    type: String,
    required: true,
    default: 'menu'
  },
  amount: {
    type: Number,
    required: true,
    default: 1000
  },
  status: {
    type: String,
    required: true,
    default: 'new'
  },
}, {
  timeStamps: true
});

module.exports = mongoose.model('Bill', BillSchema);