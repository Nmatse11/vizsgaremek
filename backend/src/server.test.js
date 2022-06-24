const app = require('./server');
const config = require('config');

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


  beforeEach(async () => {
    console.log(config.get('database'))
    await Customer.collection.drop()
  });

  test('GET /customer', () => {
    return Customer.insertMany(insertData)
      .then(() => supertest(app).get('/customer').expect(200))
      .then(response => {
        expect(Array.isArray(response.body)).toBeTruthy();
        expect(response.body.length).toEqual(insertData.length);

        response.body.forEach((customer, index) => {
          expect(customer.firstName).toBe(insertData[index].firstName);
          expect(customer.lastName).toBe(insertData[index].lastName);
          expect(customer.email).toBe(insertData[index].email);
          expect(customer.phonenumber).toBe(insertData[index].phonenumber);
          expect(customer.address[0].zip).toBe(insertData[index].address[0].zip);
          expect(customer.address[0].city).toBe(insertData[index].address[0].city);
          expect(customer.address[0].street).toBe(insertData[index].address[0].street);
          expect(customer.address[0].number).toBe(insertData[index].address[0].number);
          expect(customer.shipAddress[0].zip).toBe(insertData[index].shipAddress[0].zip);
          expect(customer.shipAddress[0].city).toBe(insertData[index].shipAddress[0].city);
          expect(customer.shipAddress[0].street).toBe(insertData[index].shipAddress[0].street);
          expect(customer.shipAddress[0].number).toBe(insertData[index].shipAddress[0].number);
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
        expect(customer.address[0].zip).toBe(insertData[0].address[0].zip);
        expect(customer.address[0].city).toBe(insertData[0].address[0].city);
        expect(customer.address[0].street).toBe(insertData[0].address[0].street);
        expect(customer.address[0].number).toBe(insertData[0].address[0].number);
        expect(customer.shipAddress[0].zip).toBe(insertData[0].shipAddress[0].zip);
        expect(customer.shipAddress[0].city).toBe(insertData[0].shipAddress[0].city);
        expect(customer.shipAddress[0].street).toBe(insertData[0].shipAddress[0].street);
        expect(customer.shipAddress[0].number).toBe(insertData[0].shipAddress[0].number);
        expect(customer.active).toBe(insertData[0].active);
      });
  });
});