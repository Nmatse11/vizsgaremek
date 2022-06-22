const FoodFastfood = require('../../model/foodFastfood.model')

exports.create = requestData => {
  const entity = new FoodFastfood(requestData);
  return entity.save();
};

exports.findAll = () => FoodFastfood.find().populate();

exports.findOne = id => FoodFastfood.findById(id).populate();

exports.update = (id, updateData) => FoodFastfood.findByIdAndUpdate(id, updateData, { new: true });

exports.delete = async id => {
  const doc = await FoodFastfood.findByIdAndRemove(id);
  if (!doc) { throw new Error('Not found'); }
  return doc.delete();
}