const { mockRequest, mockResponse } = require("jest-mock-req-res");

const billController = require('./bill.controller');
const billService = require('./bill.service');

jest.mock('./bill.service');

describe('bill controller', () => {

  const mockData = [
    {
      "_id": "62b203f1e712926327447413",
      "orderDate": "2022. 01. 01.",
      "billDate": "2022. 01. 01.",
      "orderID": "62b1ebb5cae246b1c4d73fc3",
      "type": "menu",
      "amount": 20000,
      "status": "paid"
    },
    {
      "_id": "62b203f1e712926327447414",
      "orderDate": "2022. 01. 02.",
      "billDate": "2022. 01. 02.",
      "orderID": "62b1ebb5cae246b1c4d73fc5",
      "type": "menu",
      "amount": 40000,
      "status": "paid"
    },
    {
      "_id": "62b593427bd821989c8a0c99",
      "orderDate": "2022. 01. 03.",
      "billDate": "2022. 01. 03.",
      "orderID": "62b1f3c8e57a08d0ecdeaaad",
      "type": "fastfood",
      "amount": 5000,
      "status": "paid"
    },
    {
      "_id": "62b593427bd821989c8a0c9c",
      "orderDate": "2022. 01. 04.",
      "billDate": "2022. 01. 04.",
      "orderID": "62b1ebb5cae246b1c4d73fc9",
      "type": "menu",
      "amount": 25000,
      "status": "paid"
    },
    {
      "_id": "62b203f1e712926327447413",
      "orderDate": "2022. 01. 05.",
      "billDate": "2022. 01. 05.",
      "orderID": "62b1ebb5cae246b1c4d73fcb",
      "type": "menu",
      "amount": 27000,
      "status": "paid"
    },
  ];

  let response;
  const nextFunction = jest.fn();

  beforeEach(() => {
    billService.__setMockData(mockData);
    response = mockResponse();
  });

  test("find one with valid id", () => {
    const BILL_ID = "62b203f1e712926327447413";

    const request = mockRequest({
      params: {
        id: BILL_ID
      }
    });

    return billController.findOne(request, response, nextFunction)
      .then(() => {
        expect(billService.findOne).toBeCalledWith(BILL_ID);
        expect(response.json).toBeCalledWith(
          mockData.find(bill => bill._id === BILL_ID)
        );
      });
  });
});