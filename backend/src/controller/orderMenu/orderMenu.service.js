const OrderMenu = require('../../model/orderMenu.model')

exports.create = requestData => {
  const entity = new OrderMenu(requestData);
  return entity.save();
};

exports.findAll = async () => {
  const doc = await OrderMenu.find().populate('customerID')
  return doc.sort((a, b) => (new Date(a.date)) - (new Date(b.date)))
};

exports.findOne = id => OrderMenu.findById(id)

exports.update = (id, updateData) => OrderMenu.findByIdAndUpdate(id, updateData, { new: true });

exports.delete = async id => {
  const doc = await OrderMenu.findByIdAndRemove(id);
  if (!doc) { throw new Error('Not found'); }
  return doc.delete();
};

exports.findAllOrderOfCustomer = async (id) => {
  const doc = await OrderMenu.find({ customerID: id })
  return doc.sort((a, b) => (new Date(a.date)) - (new Date(b.date)))
};

exports.findAllPaidOrder = async () => await OrderMenu.find({ status: 'paid' });
