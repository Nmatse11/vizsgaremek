const mongoose = require('mongoose');

const MenuSchema = mongoose.Schema({
  week: {
    type: Number,
    required: true,
    index: {
      unique: true
    }
  },
  AMenuFoodSoup: [
    {
      type: mongoose.Schema.Types.Object,
      ref: 'FoodMenu',
      required: true
    }
  ],
  AMenuFoodMain: [
    {
      type: mongoose.Schema.Types.Object,
      ref: 'FoodMenu',
      required: true
    }
  ],
  BMenuFoodSoup: [
    {
      type: mongoose.Schema.Types.Object,
      ref: 'FoodMenu',
      required: true
    }
  ],
  BMenuFoodMain: [
    {
      type: mongoose.Schema.Types.Object,
      ref: 'FoodMenu',
      required: true
    }
  ],
  EMenuFoodSoup: [
    {
      type: mongoose.Schema.Types.Object,
      ref: 'FoodMenu',
      required: true
    }
  ],
  EMenuFoodMain: [
    {
      type: mongoose.Schema.Types.Object,
      ref: 'FoodMenu',
      required: true
    }
  ],
  FMenuFoodSoup: [{
    type: mongoose.Schema.Types.Object,
    ref: 'FoodMenu',
    required: true
  }],
  FMenuFoodMain: [
    {
      type: mongoose.Schema.Types.Object,
      ref: 'FoodMenu',
      required: true
    }
  ],
  VMenuFoodSoup: [
    {
      type: mongoose.Schema.Types.Object,
      ref: 'FoodMenu',
      required: true
    }
  ],
  VMenuFoodMain: [
    {
      type: mongoose.Schema.Types.Object,
      ref: 'FoodMenu',
      required: true
    }
  ],
  ZMenuFoodSoup: [
    {
      type: mongoose.Schema.Types.Object,
      ref: 'FoodMenu',
      required: true
    }
  ],
  ZMenuFoodMain: [
    {
      type: mongoose.Schema.Types.Object,
      ref: 'FoodMenu',
      required: true
    }
  ],
  R1MenuFood: [
    {
      type: mongoose.Schema.Types.Object,
      ref: 'FoodMenu',
      required: true
    }
  ],
  R2MenuFood: [
    {
      type: mongoose.Schema.Types.Object,
      ref: 'FoodMenu',
      required: true
    }
  ],
  DMenuFood: [
    {
      type: mongoose.Schema.Types.Object,
      ref: 'FoodMenu',
      required: true
    }
  ],
  SMenuFood: [
    {
      type: mongoose.Schema.Types.Object,
      ref: 'FoodMenu',
      required: true
    }
  ],
  SAMenuFood: [
    {
      type: mongoose.Schema.Types.Object,
      ref: 'FoodMenu',
      required: true
    }
  ],
}, {
  timeStamps: true
});

module.exports = mongoose.model('Menu', MenuSchema);