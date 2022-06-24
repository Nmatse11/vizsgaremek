const { mockRequest, mockResponse } = require("jest-mock-req-res");

const foodMenuController = require('./foodMenu.controller');
const foodMenuService = require('./foodMenu.service');

jest.mock('./foodMenu.service');

describe('foodMenu controller', () => {

  const mockData = [
    {
      "_id": "62b203f1e712926327447413",
      "name": "reggeli1",
      "menu": "breakfast",
      "img": "",
      "allergens": [
        {
          "gluten": true,
          "milk": true,
          "soya": true,
          "egg": false,
          "peanut": false,
          "walnut": false
        }
      ],
      "category": "AA",
      "vegan": false,
      "fitness": false,
      "active": true
    },
    {
      "_id": "62b203f1e712926327447414",
      "name": "reggeli2",
      "menu": "breakfast",
      "img": "",
      "allergens": [
        {
          "gluten": true,
          "milk": true,
          "soya": true,
          "egg": false,
          "peanut": false,
          "walnut": false
        }
      ],
      "category": "BB",
      "vegan": false,
      "fitness": false,
      "active": true
    },
    {
      "_id": "62b593427bd821989c8a0c99",
      "name": "reggeli3",
      "menu": "breakfast",
      "img": "",
      "allergens": [
        {
          "gluten": true,
          "milk": true,
          "soya": true,
          "egg": false,
          "peanut": false,
          "walnut": false
        }
      ],
      "category": "CC",
      "vegan": false,
      "fitness": false,
      "active": true
    },
  ];

  let response;
  const nextFunction = jest.fn();

  beforeEach(() => {
    foodMenuService.__setMockData(mockData);
    response = mockResponse();
  });

  test("find one with valid id", () => {
    const FOOD_ID = "62b203f1e712926327447413";

    const request = mockRequest({
      params: {
        id: FOOD_ID
      }
    });

    return foodMenuController.findOne(request, response, nextFunction)
      .then(() => {
        expect(foodMenuService.findOne).toBeCalledWith(FOOD_ID);
        expect(response.json).toBeCalledWith(
          mockData.find(food => food._id === FOOD_ID)
        );
      });
  });
});