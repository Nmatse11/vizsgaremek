const express = require("express");
const controller = require('./menu.controller');

const router = express.Router();

// get
router.get('/', (req, res, next) => {
  return controller.findAll(req, res, next);
});

// get one
router.get('/:id', (req, res, next) => {
  return controller.findOne(req, res, next);
});

// update
router.patch('/:id', (req, res, next) => {
  return controller.update(req, res, next);
});

// get one menu
router.get('/week/:week', (req, res, next) => {
  return controller.findOneWeek(req, res, next);
});

module.exports = router;