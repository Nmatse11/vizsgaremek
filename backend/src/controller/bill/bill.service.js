const Bill = require('../../model/bill.model')
const OrderFastfood = require('../../model/orderFastfood.model')
const OrderMenu = require('../../model/orderMenu.model')

exports.create = requestData => {
  const entity = new Bill(requestData);
  return entity.save();
};

exports.findAll = async () => {
  const doc1 = await Bill.find({ type: { $eq: 'fastfood' } })
    .populate({ path: 'orderID', model: OrderFastfood })
  const doc2 = await Bill.find({ type: { $eq: 'menu' } })
    .populate({ path: 'orderID', model: OrderMenu })
  return doc2.concat(doc1).sort((a, b) => (new Date(a.orderDate)) - (new Date(b.orderDate)))
}

exports.findOne = async (id) => {
  let doc = await Bill.findById(id)
  let entity = new Bill
  if (doc && doc.type === 'fastfood') {
    entity = await Bill.findById(id).populate({ path: 'orderID', model: OrderFastfood })
  }
  if (doc && doc.type === 'menu') {
    entity = await Bill.findById(id).populate({ path: 'orderID', model: OrderMenu })
  }
  return entity
}

exports.update = (id, updateData) => Bill.findByIdAndUpdate(id, updateData, { new: true });

exports.delete = async id => {
  const doc = await Bill.findByIdAndRemove(id);
  if (!doc) { throw new Error('Not found'); }
  return doc.delete();
}