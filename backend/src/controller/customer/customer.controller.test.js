const { mockRequest, mockResponse } = require("jest-mock-req-res");

const customerController = require('./customer.controller');
const customerService = require('./customer.service');

jest.mock('./customer.service.js');

describe('customer controller', () => {

  const mockData = [
    {
      id: 1,
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
      id: 2,
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
    },
    {
      id: 3,
      firstName: "Teszt",
      lastName: "Elek",
      email: "test.elek@gmail.com",
      phonenumber: "0620/1111111",
      address: [
        {
          zip: 6700,
          city: "Szeged",
          street: "Fő út",
          number: 3
        }
      ],
      shipAddress: [
        {
          zip: 6700,
          city: "Szeged",
          street: "Fő út",
          number: 3
        }
      ],
      active: true
    }
  ];

  let response;
  const nextFunction = jest.fn();

  beforeEach(() => {
    customerService.__setMockData(mockData);
    response = mockResponse();
  });

  test("find one with valid id", () => {
    const CUSTOMER_ID = 1;

    const request = mockRequest({
      params: {
        id: CUSTOMER_ID
      }
    });

    return customerController.findOne(request, response, nextFunction)
      .then(() => {
        expect(customerService.findOne).toBeCalledWith(CUSTOMER_ID);
        expect(response.json).toBeCalledWith(
          mockData.find(customer => customer.id === CUSTOMER_ID)
        );
      });
  });
});