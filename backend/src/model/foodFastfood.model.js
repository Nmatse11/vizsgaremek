const mongoose = require('mongoose');

const AllergenSchema = mongoose.Schema({
  gluten: {
    type: Boolean,
    required: true,
    default: false
  },
  milk: {
    type: Boolean,
    required: true,
    default: false
  },
  soya: {
    type: Boolean,
    required: true,
    default: false
  },
  egg: {
    type: Boolean,
    required: true,
    default: false
  },
  peanut: {
    type: Boolean,
    required: true,
    default: false
  },
  walnut: {
    type: Boolean,
    required: true,
    default: false
  },
}, {
  timeStamps: true
});

const FoodFastfoodSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  menu: {
    type: String,
    required: true,
    default: 'pizza'
  },
  allergens: [AllergenSchema],
  category: {
    type: String,
    required: true,
    default: 'PIZ'
  },
  descripiton: {
    type: String,
    required: false,
  },
  active: {
    type: Boolean,
    required: true,
    default: true
  },
  numberOfOrder: {
    type: Number,
    required: false,
    default: 0
  },
  numberOfOrderFamily: {
    type: Number,
    required: false,
  },
  numberOfPaidOrder: {
    type: Number,
    required: false,
    default: 0
  },
  numberOfPaidOrderFamily: {
    type: Number,
    required: false,
  },
}, {
  timeStamps: true
});

module.exports = mongoose.model('FoodFastfood', FoodFastfoodSchema);