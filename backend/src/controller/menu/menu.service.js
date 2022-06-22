const Menu = require('../../model/menu.model')

exports.create = requestData => {
  const entity = new Menu(requestData);
  return entity.save();
};

exports.findAll = () => Menu.find();

exports.findOne = id => Menu.findById(id);

exports.update = (id, updateData) => Menu.findByIdAndUpdate(id, updateData, { new: true });

exports.delete = async id => {
  const doc = await Menu.findByIdAndRemove(id);
  if (!doc) { throw new Error('Not found'); }
  return doc.delete();
}

exports.findOneWeek = number => Menu.find({ week: number });