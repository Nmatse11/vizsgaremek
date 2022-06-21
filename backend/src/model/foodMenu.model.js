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

const FoodMenuSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  menu: {
    type: String,
    required: true,
    default: 'breakfast'
  },
  img: {
    type: String,
    required: true,
  },
  allergens: [AllergenSchema],
  category: {
    type: String,
    required: true,
    default: 'R1'
  },
  vegan: {
    type: Boolean,
    required: true,
    default: false
  },
  fitness: {
    type: Boolean,
    required: true,
    default: false
  },
  active: {
    type: Boolean,
    required: true,
    default: true
  },
  numberInMenu: {
    type: Number,
    required: false,
    default: 0
  },
  weekOfYear: [Number],
}, {
  timeStamps: true
});

module.exports = mongoose.model('FoodMenu', FoodMenuSchema);