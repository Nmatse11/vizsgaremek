const Customer = require('../../model/customer.model')

exports.create = requestData => {
  const entity = new Customer(requestData);
  return entity.save();
};

exports.findAll = () => Customer.find().populate('address').populate('shipAddress');

exports.findOne = id => Customer.findById(id).populate('address').populate('shipAddress');

exports.update = (id, updateData) => Customer.findByIdAndUpdate(id, updateData, { new: true });

exports.delete = async id => {
  const doc = await Customer.findByIdAndRemove(id);
  if (!doc) { throw new Error('Not found'); }
  return doc.delete();
}

exports.findAllName = () => Customer.find({}, { firstName: 1, lastName: 1 })