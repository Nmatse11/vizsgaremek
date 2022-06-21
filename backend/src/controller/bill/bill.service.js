const Bill = require('../../model/bill.model')

exports.create = requestData => {
  const entity = new Bill(requestData);
  return entity.save();
};

exports.findAll = () => Bill.find().populate();

exports.findOne = id => Bill.findById(id).populate();

exports.update = (id, updateData) => Bill.findByIdAndUpdate(id, updateData, { new: true });

exports.delete = async id => {
  const doc = await Bill.findByIdAndRemove(id);
  if (!doc) { throw new Error('Not found'); }
  return doc.delete();
}