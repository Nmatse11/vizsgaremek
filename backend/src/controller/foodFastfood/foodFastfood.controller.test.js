const { mockRequest, mockResponse } = require("jest-mock-req-res");

const foodFastfoodController = require('./foodFastfood.controller');
const foodFastfoodService = require('./foodFastfood.service');

jest.mock('./foodFastfood.service');

describe('foodFastfood controller', () => {

  const mockData = [
    {
      "_id": "62b203f1e712926327447413",
      "name": "Pizza1",
      "menu": "pizza",
      "allergens": [
        {
          "gluten": true,
          "milk": true,
          "egg": false,
          "soya": false,
          "peanut": false,
          "walnut": false
        }
      ],
      "category": "AA",
      "descripiton": "aaaaaa",
      "active": true,
    },
    {
      "_id": "62b203f1e712926327447414",
      "name": "Pizza2",
      "menu": "pizza",
      "allergens": [
        {
          "gluten": true,
          "milk": true,
          "egg": false,
          "soya": false,
          "peanut": false,
          "walnut": false
        }
      ],
      "category": "BB",
      "descripiton": "bbbbb",
      "active": true,
    },
    {
      "_id": "62b593427bd821989c8a0c99",
      "name": "Pizza3",
      "menu": "pizza",
      "allergens": [
        {
          "gluten": true,
          "milk": true,
          "egg": false,
          "soya": false,
          "peanut": false,
          "walnut": false
        }
      ],
      "category": "CC",
      "descripiton": "ccccc",
      "active": true,
    },
  ];

  let response;
  const nextFunction = jest.fn();

  beforeEach(() => {
    foodFastfoodService.__setMockData(mockData);
    response = mockResponse();
  });

  test("find one with valid id", () => {
    const FASTFOOD_ID = "62b203f1e712926327447413";

    const request = mockRequest({
      params: {
        id: FASTFOOD_ID
      }
    });

    return foodFastfoodController.findOne(request, response, nextFunction)
      .then(() => {
        expect(foodFastfoodService.findOne).toBeCalledWith(FASTFOOD_ID);
        expect(response.json).toBeCalledWith(
          mockData.find(fastfood => fastfood._id === FASTFOOD_ID)
        );
      });
  });
});