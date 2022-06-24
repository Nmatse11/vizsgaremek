const { mockRequest, mockResponse } = require("jest-mock-req-res");

const orderFastfoodController = require('./orderFastfood.controller');
const orderFastfoodService = require('./orderFastfood.service');

jest.mock('./orderFastfood.service');

describe('orderFastfood controller', () => {

  const mockData = [
    {
      "_id": "62b203f1e712926327447413",
      "date": "2022. 01. 01.",
      "customerID": "62af8d2f621fb233c179ceba",
      "order": [
        {
          "productID": "62b1ee5b62642dbaaa38488c"
        },
        {
          "productID": "62b1ee5b62642dbaaa38483a",
          "notes": "normal"
        }
      ],
      "amount": 5000,
      "shipping": "free",
      "status": "paid"
    },
    {
      "_id": "62b203f1e712926327447414",
      "date": "2022. 01. 02.",
      "customerID": "62af8d2f621fb233c179cdc7",
      "order": [
        {
          "productID": "62b1ee5b62642dbaaa384830",
          "notes": "family"
        },
        {
          "productID": "62b1ee5b62642dbaaa384830",
          "notes": "family"
        }
      ],
      "amount": 6000,
      "shipping": "personal",
      "status": "paid"
    },
    {
      "_id": "62b593427bd821989c8a0c99",
      "date": "2022. 01. 03.",
      "customerID": "62af8d2f621fb233c179cdc7",
      "order": [
        {
          "productID": "62b1ee5b62642dbaaa384828",
          "notes": "normal"
        },
        {
          "productID": "62b1ee5b62642dbaaa38482a",
          "notes": "normal"
        },
        {
          "productID": "62b1ee5b62642dbaaa38482a",
          "notes": "normal"
        },
        {
          "productID": "62b1ee5b62642dbaaa38482e",
          "notes": "normal"
        },
      ],
      "amount": 8000,
      "shipping": "personal",
      "status": "paid"
    },
  ];

  let response;
  const nextFunction = jest.fn();

  beforeEach(() => {
    orderFastfoodService.__setMockData(mockData);
    response = mockResponse();
  });

  test("find one with valid id", () => {
    const ORDER_ID = "62b203f1e712926327447413";

    const request = mockRequest({
      params: {
        id: ORDER_ID
      }
    });

    return orderFastfoodController.findOne(request, response, nextFunction)
      .then(() => {
        expect(orderFastfoodService.findOne).toBeCalledWith(ORDER_ID);
        expect(response.json).toBeCalledWith(
          mockData.find(order => order._id === ORDER_ID)
        );
      });
  });
});