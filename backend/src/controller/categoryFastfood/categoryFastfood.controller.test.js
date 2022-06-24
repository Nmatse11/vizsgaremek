const { mockRequest, mockResponse } = require("jest-mock-req-res");

const categoryFastfoodController = require('./categoryFastfood.controller');
const categoryFastfoodService = require('./categoryFastfood.service');

jest.mock('./categoryFastfood.service');

describe('categoryFastfood controller', () => {

  const mockData = [
    {
      "_id": "62b203f1e712926327447413",
      "categoryCode": "AA",
      "menu": "aaa",
      "notes": "primary",
      "price": 1000,
    },
    {
      "_id": "62b203f1e712926327447414",
      "categoryCode": "BB",
      "menu": "bbb",
      "notes": "primary",
      "price": 2000,
    },
    {
      "_id": "62b593427bd821989c8a0c99",
      "categoryCode": "CC",
      "menu": "ccc",
      "notes": "primary",
      "price": 3000,
    },
    {
      "_id": "62b593427bd821989c8a0c9c",
      "categoryCode": "DD",
      "menu": "ddd",
      "notes": "primary",
      "price": 4000,
    },
    {
      "_id": "62b203f1e712926327447413",
      "categoryCode": "EE",
      "menu": "eee",
      "notes": "primary",
      "price": 5000,
    },
  ];

  let response;
  const nextFunction = jest.fn();

  beforeEach(() => {
    categoryFastfoodService.__setMockData(mockData);
    response = mockResponse();
  });

  test("find one with valid id", () => {
    const CATEGORY_ID = "62b203f1e712926327447413";

    const request = mockRequest({
      params: {
        id: CATEGORY_ID
      }
    });

    return categoryFastfoodController.findOne(request, response, nextFunction)
      .then(() => {
        expect(categoryFastfoodService.findOne).toBeCalledWith(CATEGORY_ID);
        expect(response.json).toBeCalledWith(
          mockData.find(category => category._id === CATEGORY_ID)
        );
      });
  });
});