const { mockRequest, mockResponse } = require("jest-mock-req-res");

const menuController = require('./menu.controller');
const menuService = require('./menu.service');

jest.mock('./menu.service');

describe('menu controller', () => {

  const mockData = [
    {
      "_id": "62b203f1e712926327447413",
      "week": 1,
      "AMenuFoodSoup": [],
      "AMenuFoodMain": [],
      "BMenuFoodSoup": [],
      "BMenuFoodMain": [],
      "EMenuFoodSoup": [],
      "EMenuFoodMain": [],
      "FMenuFoodSoup": [],
      "FMenuFoodMain": [],
      "VMenuFoodSoup": [],
      "VMenuFoodMain": [],
      "ZMenuFoodSoup": [],
      "ZMenuFoodMain": [],
      "R1MenuFood": [],
      "R2MenuFood": [],
      "DMenuFood": [],
      "SMenuFood": [],
      "SAMenuFood": []
    },
    {
      "_id": "62b203f1e712926327447414",
      "week": 2,
      "AMenuFoodSoup": [],
      "AMenuFoodMain": [],
      "BMenuFoodSoup": [],
      "BMenuFoodMain": [],
      "EMenuFoodSoup": [],
      "EMenuFoodMain": [],
      "FMenuFoodSoup": [],
      "FMenuFoodMain": [],
      "VMenuFoodSoup": [],
      "VMenuFoodMain": [],
      "ZMenuFoodSoup": [],
      "ZMenuFoodMain": [],
      "R1MenuFood": [],
      "R2MenuFood": [],
      "DMenuFood": [],
      "SMenuFood": [],
      "SAMenuFood": []
    },
    {
      "_id": "62b593427bd821989c8a0c99",
      "week": 3,
      "AMenuFoodSoup": [],
      "AMenuFoodMain": [],
      "BMenuFoodSoup": [],
      "BMenuFoodMain": [],
      "EMenuFoodSoup": [],
      "EMenuFoodMain": [],
      "FMenuFoodSoup": [],
      "FMenuFoodMain": [],
      "VMenuFoodSoup": [],
      "VMenuFoodMain": [],
      "ZMenuFoodSoup": [],
      "ZMenuFoodMain": [],
      "R1MenuFood": [],
      "R2MenuFood": [],
      "DMenuFood": [],
      "SMenuFood": [],
      "SAMenuFood": []
    }
  ];

  let response;
  const nextFunction = jest.fn();

  beforeEach(() => {
    menuService.__setMockData(mockData);
    response = mockResponse();
  });

  test("find one with valid id", () => {
    const MENU_ID = "62b203f1e712926327447413";

    const request = mockRequest({
      params: {
        id: MENU_ID
      }
    });

    return menuController.findOne(request, response, nextFunction)
      .then(() => {
        expect(menuService.findOne).toBeCalledWith(MENU_ID);
        expect(response.json).toBeCalledWith(
          mockData.find(menu => menu._id === MENU_ID)
        );
      });
  });
});