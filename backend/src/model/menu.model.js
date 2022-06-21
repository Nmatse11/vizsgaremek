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
      ref: 'Food',
      required: true
    }
  ],
  AMenuFoodMain: [
    {
      type: mongoose.Schema.Types.Object,
      ref: 'Food',
      required: true
    }
  ],
  BMenuFoodSoup: [
    {
      type: mongoose.Schema.Types.Object,
      ref: 'Food',
      required: true
    }
  ],
  BMenuFoodMain: [
    {
      type: mongoose.Schema.Types.Object,
      ref: 'Food',
      required: true
    }
  ],
  EMenuFoodSoup: [
    {
      type: mongoose.Schema.Types.Object,
      ref: 'Food',
      required: true
    }
  ],
  EMenuFoodMain: [
    {
      type: mongoose.Schema.Types.Object,
      ref: 'Food',
      required: true
    }
  ],
  FMenuFoodSoup: [{
    type: mongoose.Schema.Types.Object,
    ref: 'Food',
    required: true
  }],
  FMenuFoodMain: [
    {
      type: mongoose.Schema.Types.Object,
      ref: 'Food',
      required: true
    }
  ],
  VMenuFoodSoup: [
    {
      type: mongoose.Schema.Types.Object,
      ref: 'Food',
      required: true
    }
  ],
  VMenuFoodMain: [
    {
      type: mongoose.Schema.Types.Object,
      ref: 'Food',
      required: true
    }
  ],
  ZMenuFoodSoup: [
    {
      type: mongoose.Schema.Types.Object,
      ref: 'Food',
      required: true
    }
  ],
  ZMenuFoodMain: [
    {
      type: mongoose.Schema.Types.Object,
      ref: 'Food',
      required: true
    }
  ],
  R1MenuFood: [
    {
      type: mongoose.Schema.Types.Object,
      ref: 'Food',
      required: true
    }
  ],
  R2MenuFood: [
    {
      type: mongoose.Schema.Types.Object,
      ref: 'Food',
      required: true
    }
  ],
  DMenuFood: [
    {
      type: mongoose.Schema.Types.Object,
      ref: 'Food',
      required: true
    }
  ],
  SMenuFood: [
    {
      type: mongoose.Schema.Types.Object,
      ref: 'Food',
      required: true
    }
  ],
  SAMenuFood: [
    {
      type: mongoose.Schema.Types.Object,
      ref: 'Food',
      required: true
    }
  ],
}, {
  timeStamps: true
});

module.exports = mongoose.model('Menu', MenuSchema);