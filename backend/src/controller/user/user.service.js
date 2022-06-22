const User = require('../../model/user.model')

exports.create = requestData => {
  const entity = new User(requestData);
  return entity.save();
};

exports.findAll = () => User.find().populate('customerID');

exports.findOne = id => User.findById(id).populate('customerID');

exports.update = (id, updateData) => User.findByIdAndUpdate(id, updateData, { new: true });

exports.delete = async id => {
  const doc = await User.findByIdAndRemove(id);
  if (!doc) { throw new Error('Not found'); }
  return doc.delete();
}