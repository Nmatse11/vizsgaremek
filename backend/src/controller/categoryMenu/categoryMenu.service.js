const CategoryMenu = require('../../model/categoryMenu.model')

exports.create = requestData => {
  const entity = new CategoryMenu(requestData);
  return entity.save();
};

exports.findAll = () => CategoryMenu.find().populate();

exports.findOne = id => CategoryMenu.findById(id).populate();

exports.update = (id, updateData) => CategoryMenu.findByIdAndUpdate(id, updateData, { new: true });

exports.delete = async id => {
  const doc = await CategoryMenu.findByIdAndRemove(id);
  if (!doc) { throw new Error('Not found'); }
  return doc.delete();
}