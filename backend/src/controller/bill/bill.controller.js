const express = require('express');
const createError = require('http-errors');

const Bill = require('../../model/bill.model');
const billService = require('./bill.service');

exports.create = (req, res, next) => {
  const validationErrors = new Bill(req.body).validateSync();
  if (validationErrors) {
    return next(
      new createError.BadRequest(validationErrors)
    );
  }

  return billService.create(req.body)
    .then(cp => {
      res.status(201);
      res.json(cp);
    })
    .catch(err => next(new createError.InternalServerError(err.message)));
};

exports.findAll = (req, res, next) => {
  return billService.findAll()
    .then(bills => {
      res.json(bills);
    });
};

exports.findOne = (req, res, next) => {
  return billService.findOne(req.params.id)
    .then(bill => {
      if (!bill) {
        return next(new createError.NotFound("Bill is not found"));
      }
      return res.json(bill);
    });
};

exports.update = (req, res, next) => {
  const validationErrors = new Bill(req.body).validateSync();
  if (validationErrors) {
    return next(
      new createError.BadRequest(validationErrors)
    );
  }

  return billService.update(req.params.id, req.body)
    .then(bill => {
      res.json(bill);
    })
    .catch(err => {
      next(new createError.InternalServerError(err.message));
    });
};

exports.delete = (req, res, next) => {
  return billService.delete(req.params.id)
    .then(() => res.json({}))
    .catch(err => {
      next(new createError.InternalServerError(err.message));
    });
};