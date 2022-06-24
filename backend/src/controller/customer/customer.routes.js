const express = require("express");
const controller = require('./customer.controller');

const router = express.Router();

// create
router.post('/', (req, res, next) => {
  return controller.create(req, res, next);
});

// get
router.get('/', (req, res, next) => {
  return controller.findAll(req, res, next);
});

// get names
router.get('/customer/names', (req, res, next) => {
  return controller.findAllName(req, res, next);
});

// get one email
router.get('/customer/:email', (req, res, next) => {
  return controller.findOneByEmail(req, res, next);
});

// get one
router.get('/:id', (req, res, next) => {
  return controller.findOne(req, res, next);
});

// update
router.patch('/:id', (req, res, next) => {
  return controller.update(req, res, next);
});

// delete
router.delete('/:id', (req, res, next) => {
  return controller.delete(req, res, next);
});

module.exports = router;