const Menu = require('../../model/menu.model')

exports.findAll = () => Menu.find();

exports.findOne = id => Menu.findById(id);

exports.update = (id, updateData) => Menu.findByIdAndUpdate(id, updateData, { new: true });

exports.findOneWeek = number => Menu.find({ week: number });