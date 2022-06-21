const Fastfood = require('../../model/foodFastfood.model')

exports.create = requestData => {
  const entity = new Fastfood(requestData);
  return entity.save();
};

exports.findAll = () => Fastfood.find().populate();

exports.findOne = id => Fastfood.findById(id).populate();

exports.update = (id, updateData) => Fastfood.findByIdAndUpdate(id, updateData, { new: true });

exports.delete = async id => {
  const doc = await Fastfood.findByIdAndRemove(id);
  if (!doc) { throw new Error('Not found'); }
  return doc.delete();
}