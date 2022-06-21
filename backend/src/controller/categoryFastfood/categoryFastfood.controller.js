const express = require('express');
const createError = require('http-errors');

const Category = require('../../model/categoryFastfood.model');
const categoryService = require('./categoryFastfood.service');

exports.create = (req, res, next) => {
  const validationErrors = new Category(req.body).validateSync();
  if (validationErrors) {
    return next(
      new createError.BadRequest(validationErrors)
    );
  }

  return categoryService.create(req.body)
    .then(cp => {
      res.status(201);
      res.json(cp);
    })
    .catch(err => next(new createError.InternalServerError(err.message)));
};

exports.findAll = (req, res, next) => {
  return categoryService.findAll()
    .then(categories => {
      res.json(categories);
    });
};

exports.findOne = (req, res, next) => {
  return categoryService.findOne(req.params.id)
    .then(category => {
      if (!category) {
        return next(new createError.NotFound("Category is not found"));
      }
      return res.json(category);
    });
};

exports.update = (req, res, next) => {
  const validationErrors = new Category(req.body).validateSync();
  if (validationErrors) {
    return next(
      new createError.BadRequest(validationErrors)
    );
  }

  return categoryService.update(req.params.id, req.body)
    .then(category => {
      res.json(category);
    })
    .catch(err => {
      next(new createError.InternalServerError(err.message));
    });
};

exports.delete = (req, res, next) => {
  return categoryService.delete(req.params.id)
    .then(() => res.json({}))
    .catch(err => {
      next(new createError.InternalServerError(err.message));
    });
};