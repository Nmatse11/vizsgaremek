const express = require('express');
const createError = require('http-errors');

const Fastfood = require('../../model/foodFastfood.model');
const fastfoodService = require('./foodFastfood.service');

exports.create = (req, res, next) => {
  const validationErrors = new Fastfood(req.body).validateSync();
  if (validationErrors) {
    return next(
      new createError.BadRequest(validationErrors)
    );
  }

  return fastfoodService.create(req.body)
    .then(cp => {
      res.status(201);
      res.json(cp);
    })
    .catch(err => next(new createError.InternalServerError(err.message)));
};

exports.findAll = (req, res, next) => {
  return fastfoodService.findAll()
    .then(fastfoods => {
      res.json(fastfoods);
    });
};

exports.findOne = (req, res, next) => {
  return fastfoodService.findOne(req.params.id)
    .then(fastfood => {
      if (!fastfood) {
        return next(new createError.NotFound("Fastfood is not found"));
      }
      return res.json(fastfood);
    });
};

exports.update = (req, res, next) => {
  const validationErrors = new Fastfood(req.body).validateSync();
  if (validationErrors) {
    return next(
      new createError.BadRequest(validationErrors)
    );
  }

  return fastfoodService.update(req.params.id, req.body)
    .then(fastfood => {
      res.json(fastfood);
    })
    .catch(err => {
      next(new createError.InternalServerError(err.message));
    });
};

exports.delete = (req, res, next) => {
  return fastfoodService.delete(req.params.id)
    .then(() => res.json({}))
    .catch(err => {
      next(new createError.InternalServerError(err.message));
    });
};