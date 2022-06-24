const app = require('./server');
const mongoose = require('mongoose');
const logger = require('./config/logger');

const supertest = require('supertest');
const Customer = require('./model/customer.model');

describe('REST API integration tests', () => {

  const insertData = [
    {
      firstName: "Példa",
      lastName: "István",
      email: "pelda.istvan@gmail.com",
      phonenumber: "0620/1234567",
      address: [
        {
          zip: 6700,
          city: "Szeged",
          street: "Fő út",
          number: 1
        }
      ],
      shipAddress: [
        {
          zip: 6700,
          city: "Szeged",
          street: "Fő út",
          number: 1
        }
      ],
      active: true
    },
    {
      firstName: "Minta",
      lastName: "Károly",
      email: "minta.karoly@gmail.com",
      phonenumber: "0620/7654321",
      address: [
        {
          zip: 6700,
          city: "Szeged",
          street: "Fő út",
          number: 2
        }
      ],
      shipAddress: [
        {
          zip: 6700,
          city: "Szeged",
          street: "Fő út",
          number: 2
        }
      ],
      active: true
    }
  ];


  beforeEach(done => {

    const TESTdatabase = {
      user: "user",
      pass: "ZtbemO9yCYWAbIbd",
      host: "mongodb+srv://user:ZtbemO9yCYWAbIbd@vizsgaremektest.wej9u41.mongodb.net/?retryWrites=true&w=majority"
    }

    mongoose.connect(`mongodb+srv://${TESTdatabase.host}`, {
      user: TESTdatabase.user,
      pass: TESTdatabase.pass,
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
      .then(() => {
        done();
      })
      .catch(err => {
        logger.error(err);
        process.exit();
      })

  });

  test('GET /customer', () => {
    return Customer.insertMany(insertData)
      .then(() => supertest(app).get('/customer').expect(200))
      .then(response => {
        expect(Array.isArray(response.body)).toBeTruthy();
        expect(response.body.length).toEqual(inserData.length);

        response.body.forEach((customer, index) => {
          expect(customer.firstName).toBe(insertData[index].firstName);
          expect(customer.lastName).toBe(insertData[index].lastName);
          expect(customer.email).toBe(insertData[index].email);
          expect(customer.phonenumber).toBe(insertData[index].phonenumber);
          expect(customer.address).toBe(insertData[index].address);
          expect(customer.shipAddress).toBe(inserData[index].shipAddress);
          expect(customer.active).toBe(insertData[index].active);
        });
      });
  });

  test('GET /customer/:id', () => {
    let customerId;
    return Customer.insertMany(insertData)
      .then(customers => {
        customerId = customers[0].id;
        return supertest(app).get(`/customer/${customerId}`).expect(200);
      })
      .then(response => {
        const customer = response.body;
        expect(customer.firstName).toBe(insertData[0].firstName);
        expect(customer.lastName).toBe(insertData[0].lastName);
        expect(customer.email).toBe(insertData[0].email);
        expect(customer.phonenumber).toBe(insertData[0].phonenumber);
        expect(customer.address).toBe(insertData[0].address);
        expect(customer.shipAddress).toBe(insertData[0].shipAddress);
        expect(customer.active).toBe(insertData[0].active);
      });
  });
});