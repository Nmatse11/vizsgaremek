const mongoose = require('mongoose');

const AddressSchema = mongoose.Schema({
  zip: {
    type: Number,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  street: {
    type: String,
    required: true
  },
  number: {
    type: Number,
    required: true
  },
  notes: {
    type: String,
    required: false
  },
}, {
  timeStamps: true
});

const CustomerSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    index: {
      unique: true
    }
  },
  phonenumber: {
    type: String,
    required: true
  },
  address: [AddressSchema],
  shipAddress: [AddressSchema],
  active: {
    type: Boolean,
    required: true,
    default: true
  },
}, {
  timeStamps: true
});


module.exports = mongoose.model('Customer', CustomerSchema);