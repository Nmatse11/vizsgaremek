const mongoose = require('mongoose');

const CategoryMenuSchema = mongoose.Schema({
  categoryCode: {
    type: String,
    required: true,
    index: {
      unique: true
    }
  },
  menu: {
    type: String,
    required: true,
    default: 'main_course'
  },
  notes: {
    type: String,
    required: true,
    default: 'prime'
  },
  price: {
    type: Number,
    required: true,
    default: 1000
  },
  weigh: {
    type: String,
    required: false,
    default: 100
  },
  numberOfFood: {
    type: Number,
    required: false,
    default: 0
  },
  numberOfOrder: {
    type: Number,
    required: false,
    default: 0
  },
  numberOfPaidOrder: {
    type: Number,
    required: false,
    default: 0
  },
}, {
  timeStamps: true
});

module.exports = mongoose.model('CategoryMenu', CategoryMenuSchema);