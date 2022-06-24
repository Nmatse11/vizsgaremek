const { mockRequest, mockResponse } = require("jest-mock-req-res");

const orderMenuController = require('./orderMenu.controller');
const orderMenuService = require('./orderMenu.service');

jest.mock('./orderMenu.service');

describe('orderMenu controller', () => {

  const mockData = [
    {
      "_id": "62b203f1e712926327447413",
      "customerID": "62af8d2f621fb233c179ce42",
      "date": "2022. 01. 01.",
      "order": [
        {
          "week": 2,
          "menuCode": "E",
          "portion": 3
        }
      ],
      "amount": 27000,
      "shipping": "free",
      "status": "paid"
    },
    {
      "_id": "62b203f1e712926327447414",
      "customerID": "62af8d2f621fb233c179ceb1",
      "date": "2022. 01. 02.",
      "order": [
        {
          "week": 2,
          "menuCode": "A",
          "portion": 1
        },
        {
          "week": 2,
          "menuCode": "B",
          "portion": 3
        },
        {
          "week": 2,
          "menuCode": "F",
          "portion": 1
        }
      ],
      "amount": 39000,
      "shipping": "free",
      "status": "paid"
    },
    {
      "_id": "62b593427bd821989c8a0c99",
      "customerID": "62af8d2f621fb233c179cf02",
      "date": "2022. 01. 03.",
      "order": [
        {
          "week": 2,
          "menuCode": "B",
          "portion": 3
        }
      ],
      "amount": 24000,
      "shipping": "shipping",
      "status": "paid"
    },
  ];

  let response;
  const nextFunction = jest.fn();

  beforeEach(() => {
    orderMenuService.__setMockData(mockData);
    response = mockResponse();
  });

  test("find one with valid id", () => {
    const ORDER_ID = "62b203f1e712926327447413";

    const request = mockRequest({
      params: {
        id: ORDER_ID
      }
    });

    return orderMenuController.findOne(request, response, nextFunction)
      .then(() => {
        expect(orderMenuService.findOne).toBeCalledWith(ORDER_ID);
        expect(response.json).toBeCalledWith(
          mockData.find(order => order._id === ORDER_ID)
        );
      });
  });
});