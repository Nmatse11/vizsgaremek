const OrderFastfood = require('../../model/orderFastfood.model')

exports.create = requestData => {
  const entity = new OrderFastfood(requestData);
  return entity.save();
};

exports.findAll = async () => {
  const doc = await OrderFastfood.find().populate('customerID')
  return doc.sort((a, b) => (new Date(a.date)) - (new Date(b.date)))
};

exports.findOne = id => OrderFastfood.findById(id).populate('customerID');

exports.update = (id, updateData) => OrderFastfood.findByIdAndUpdate(id, updateData, { new: true });

exports.delete = async id => {
  const doc = await OrderFastfood.findByIdAndRemove(id);
  if (!doc) { throw new Error('Not found'); }
  return doc.delete();
}