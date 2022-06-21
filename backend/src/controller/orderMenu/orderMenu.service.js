const Order = require('../../model/orderMenu.model')

exports.create = requestData => {
  const entity = new Order(requestData);
  return entity.save();
};

exports.findAll = () => Order.find().populate();

exports.findOne = id => Order.findById(id).populate();

exports.update = (id, updateData) => Order.findByIdAndUpdate(id, updateData, { new: true });

exports.delete = async id => {
  const doc = await Order.findByIdAndRemove(id);
  if (!doc) { throw new Error('Not found'); }
  return doc.delete();
}