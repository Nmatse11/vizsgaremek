const express = require('express');
const createError = require('http-errors');

const Order = require('../../model/orderMenu.model');
const orderService = require('./orderMenu.service');

exports.create = (req, res, next) => {
  const validationErrors = new Order(req.body).validateSync();
  if (validationErrors) {
    return next(
      new createError.BadRequest(validationErrors)
    );
  }

  return orderService.create(req.body)
    .then(cp => {
      res.status(201);
      res.json(cp);
    })
    .catch(err => next(new createError.InternalServerError(err.message)));
};

exports.findAll = (req, res, next) => {
  return orderService.findAll()
    .then(orders => {
      res.json(orders);
    });
};

exports.findOne = (req, res, next) => {
  return orderService.findOne(req.params.id)
    .then(order => {
      if (!order) {
        return next(new createError.NotFound("Order is not found"));
      }
      return res.json(order);
    });
};

exports.update = (req, res, next) => {
  const validationErrors = new Order(req.body).validateSync();
  if (validationErrors) {
    return next(
      new createError.BadRequest(validationErrors)
    );
  }

  return orderService.update(req.params.id, req.body)
    .then(order => {
      res.json(order);
    })
    .catch(err => {
      next(new createError.InternalServerError(err.message));
    });
};

exports.delete = (req, res, next) => {
  return orderService.delete(req.params.id)
    .then(() => res.json({}))
    .catch(err => {
      next(new createError.InternalServerError(err.message));
    });
};