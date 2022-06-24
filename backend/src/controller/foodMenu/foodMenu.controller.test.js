const { mockRequest, mockResponse } = require("jest-mock-req-res");

const foodMenuController = require('./foodMenu.controller');
const foodMenuService = require('./foodMenu.service');

jest.mock('./foodMenu.service');

describe('foodMenu controller', () => {

  const mockData = [
    {
      "id": 1,
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
      "id": 2,
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
      "id": 3,
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
    const FOOD_ID = 1;

    const request = mockRequest({
      params: {
        id: FOOD_ID
      }
    });

    return foodMenuController.findOne(request, response, nextFunction)
      .then(() => {
        expect(foodMenuService.findOne).toBeCalledWith(FOOD_ID);
        expect(response.json).toBeCalledWith(
          mockData.find(food => food.id === FOOD_ID)
        );
      });
  });
});