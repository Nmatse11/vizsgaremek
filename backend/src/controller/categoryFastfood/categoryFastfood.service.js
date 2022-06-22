const CategoryFastfood = require('../../model/categoryFastfood.model')

exports.create = requestData => {
  const entity = new CategoryFastfood(requestData);
  return entity.save();
};

exports.findAll = () => CategoryFastfood.find().populate();

exports.findOne = id => CategoryFastfood.findById(id).populate();

exports.update = (id, updateData) => CategoryFastfood.findByIdAndUpdate(id, updateData, { new: true });

exports.delete = async id => {
  const doc = await CategoryFastfood.findByIdAndRemove(id);
  if (!doc) { throw new Error('Not found'); }
  return doc.delete();
}