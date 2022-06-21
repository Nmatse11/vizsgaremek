const FoodMenu = require('../../model/foodMenu.model')

exports.create = requestData => {
  const entity = new FoodMenu(requestData);
  return entity.save();
};

exports.findAll = () => FoodMenu.find().populate();

exports.findOne = id => FoodMenu.findById(id).populate();

exports.update = (id, updateData) => FoodMenu.findByIdAndUpdate(id, updateData, { new: true });

exports.delete = async id => {
  const doc = await FoodMenu.findByIdAndRemove(id);
  if (!doc) { throw new Error('Not found'); }
  return doc.delete();
}