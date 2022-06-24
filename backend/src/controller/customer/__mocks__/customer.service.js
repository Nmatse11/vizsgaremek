const service = jest.mock('./customer.service');

let mockData;

service.findOne = jest.fn(id => Promise.resolve(
  mockData.find(entity => entity._id === id))
);

service.__setMockData = data => mockData = data;

module.exports = service;