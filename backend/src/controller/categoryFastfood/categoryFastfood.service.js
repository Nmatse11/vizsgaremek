const Category = require('../../model/categoryFastfood.model')

exports.create = requestData => {
  const entity = new Category(requestData);
  return entity.save();
};

exports.findAll = () => Category.find().populate();

exports.findOne = id => Category.findById(id).populate();

exports.update = (id, updateData) => Category.findByIdAndUpdate(id, updateData, { new: true });

exports.delete = async id => {
  const doc = await Category.findByIdAndRemove(id);
  if (!doc) { throw new Error('Not found'); }
  return doc.delete();
}