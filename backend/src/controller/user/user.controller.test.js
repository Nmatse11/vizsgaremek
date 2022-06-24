const { mockRequest, mockResponse } = require("jest-mock-req-res");

const userController = require('./user.controller');
const userService = require('./user.service');

'use strict';

jest.mock('./user.service');

describe('user controller', () => {

  const mockData = [
    {
      "_id": "62b203f1e712926327447413",
      "email": "minta.ferenc@gmail.com",
      "password": "test",
      "role": "customer",
      "customerID": "62af8d2f621fb233c179cd8b"
    },
    {
      "_id": "62b203f1e712926327447414",
      "email": "pelda.maria@gmail.com",
      "password": "test",
      "role": "customer",
      "customerID": "62af8d2f621fb233c179cd8e"
    },
    {
      "_id": "62b593427bd821989c8a0c99",
      "email": "teszt.elek@gmail.com",
      "password": "test",
      "role": "customer",
      "customerID": "62af8d2f621fb233c179cd91"
    },
    {
      "_id": "62b593427bd821989c8a0c9c",
      "email": "minta.lajos@gmail.com",
      "password": "test",
      "role": "customer",
      "customerID": "62af8d2f621fb233c179cd94"
    },
    {
      "_id": "62b203f1e712926327447413",
      "email": "pelda.eva@gmail.com",
      "password": "test",
      "role": "customer",
      "customerID": "62af8d2f621fb233c179cd97"
    },
  ];

  let response;
  const nextFunction = jest.fn();

  beforeEach(() => {
    userService.__setMockData(mockData);
    response = mockResponse();
  });

  test("find one with valid id", () => {
    const USER_ID = "62b203f1e712926327447413";

    const request = mockRequest({
      params: {
        id: USER_ID
      }
    });

    return userController.findOne(request, response, nextFunction)
      .then(() => {
        expect(userService.findOne).toBeCalledWith(USER_ID);
        expect(response.json).toBeCalledWith(
          mockData.find(user => user._id === USER_ID)
        );
      });
  });
});