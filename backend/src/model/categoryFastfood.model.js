const mongoose = require('mongoose');

const CategoryFastfoodSchema = mongoose.Schema({
  categoryCode: {
    type: String,
    required: true,
    index: {
      unique: true
    }
  },
  menu: {
    type: String,
    required: true
  },
  notes: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true,
    default: 1000
  },
  size: {
    type: String,
    required: false,
  },
  numberOfFood: {
    type: Number,
    required: false,
    default: 0
  },
  sumOfOrder: {
    type: Number,
    required: false,
    default: 0
  },
}, {
  timeStamps: true
});

module.exports = mongoose.model('CategoryFastfood', CategoryFastfoodSchema);