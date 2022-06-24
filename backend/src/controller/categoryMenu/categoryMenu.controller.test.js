const { mockRequest, mockResponse } = require("jest-mock-req-res");

const categoryMenuController = require('./categoryMenu.controller');
const categoryMenuService = require('./categoryMenu.service');

jest.mock('./categoryMenu.service');

describe('categoryMenu controller', () => {

  const mockData = [
    {
      "id": 1,
      "categoryCode": "AA",
      "menu": "aaa",
      "notes": "primary",
      "price": 1000,
    },
    {
      "id": 2,
      "categoryCode": "BB",
      "menu": "bbb",
      "notes": "primary",
      "price": 2000,
    },
    {
      "id": 3,
      "categoryCode": "CC",
      "menu": "ccc",
      "notes": "primary",
      "price": 3000,
    },
    {
      "id": 4,
      "categoryCode": "DD",
      "menu": "ddd",
      "notes": "primary",
      "price": 4000,
    },
    {
      "id": 5,
      "categoryCode": "EE",
      "menu": "eee",
      "notes": "primary",
      "price": 5000,
    },
  ];

  let response;
  const nextFunction = jest.fn();

  beforeEach(() => {
    categoryMenuService.__setMockData(mockData);
    response = mockResponse();
  });

  test("find one with valid id", () => {
    const CATEGORY_ID = 1;

    const request = mockRequest({
      params: {
        id: CATEGORY_ID
      }
    });

    return categoryMenuController.findOne(request, response, nextFunction)
      .then(() => {
        expect(categoryMenuService.findOne).toBeCalledWith(CATEGORY_ID);
        expect(response.json).toBeCalledWith(
          mockData.find(category => category.id === CATEGORY_ID)
        );
      });
  });
});