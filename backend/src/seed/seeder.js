const fsp = require('fs').promises;
const Bill = require('../model/bill.model');
const CategoryFastfood = require('../model/categoryFastfood.model');
const CategoryMenu = require('../model/categoryMenu.model');
const Customer = require('../model/customer.model');
const FoodFastfood = require('../model/foodFastfood.model');
const FoodMenu = require('../model/foodMenu.model');
const Menu = require('../model/menu.model');
const OrderFastfood = require('../model/orderFastfood.model');
const OrderMenu = require('../model/orderMenu.model');
const User = require('../model/user.model');

const users = require('./user.json')

const seedCollection = async (model, fileName) => {
  try {
    const exists = await model.find().count();
    if (!exists) {
      throw new Error();
    }
  } catch (error) {
    const source = await fsp.readFile(
      `./src/seed/${fileName}.json`,
      'utf8'
    );
    const list = JSON.parse(source);
    if (model && model.insertMany) {
      await model.insertMany(list);
    }
  }
};

(async () => {

  //seedCollection(Bill, 'bill');
  //seedCollection(CategoryFastfood, 'categoryFastfood');
  //seedCollection(CategoryMenu, 'categoryMenu');
  //seedCollection(Customer, 'customer');
  //seedCollection(FoodFastfood, 'foodFastfood');
  //seedCollection(FoodMenu, 'foodMenu');
  //seedCollection(Menu, 'menu');
  //seedCollection(OrderFastfood, 'orderFastfood');
  //seedCollection(OrderMenu, 'orderMenu');
  //users.forEach(async user => {
  //  const newUser = new User(user)
  //  await newUser.save()
  //})

})();