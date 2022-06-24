const { mockRequest, mockResponse } = require("jest-mock-req-res");

const foodFastfoodController = require('./foodFastfood.controller');
const foodFastfoodService = require('./foodFastfood.service');

jest.mock('./foodFastfood.service');

describe('foodFastfood controller', () => {

  const mockData = [
    {
      "id": 1,
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
      "id": 2,
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
      "id": 3,
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
    const FASTFOOD_ID = 1;

    const request = mockRequest({
      params: {
        id: FASTFOOD_ID
      }
    });

    return foodFastfoodController.findOne(request, response, nextFunction)
      .then(() => {
        expect(foodFastfoodService.findOne).toBeCalledWith(FASTFOOD_ID);
        expect(response.json).toBeCalledWith(
          mockData.find(fastfood => fastfood.id === FASTFOOD_ID)
        );
      });
  });
});