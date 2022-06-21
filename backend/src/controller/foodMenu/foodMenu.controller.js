const express = require('express');
const createError = require('http-errors');

const FoodMenu = require('../../model/foodMenu.model');
const foodMenuService = require('./foodMenu.service');

exports.create = (req, res, next) => {
  const validationErrors = new FoodMenu(req.body).validateSync();
  if (validationErrors) {
    return next(
      new createError.BadRequest(validationErrors)
    );
  }

  return foodMenuService.create(req.body)
    .then(cp => {
      res.status(201);
      res.json(cp);
    })
    .catch(err => next(new createError.InternalServerError(err.message)));
};

exports.findAll = (req, res, next) => {
  return foodMenuService.findAll()
    .then(foods => {
      res.json(foods);
    });
};

exports.findOne = (req, res, next) => {
  return foodMenuService.findOne(req.params.id)
    .then(food => {
      if (!food) {
        return next(new createError.NotFound("Food is not found"));
      }
      return res.json(food);
    });
};

exports.update = (req, res, next) => {
  const validationErrors = new FoodMenu(req.body).validateSync();
  if (validationErrors) {
    return next(
      new createError.BadRequest(validationErrors)
    );
  }

  return foodMenuService.update(req.params.id, req.body)
    .then(food => {
      res.json(food);
    })
    .catch(err => {
      next(new createError.InternalServerError(err.message));
    });
};

exports.delete = (req, res, next) => {
  return foodMenuService.delete(req.params.id)
    .then(() => res.json({}))
    .catch(err => {
      next(new createError.InternalServerError(err.message));
    });
};