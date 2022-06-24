const express = require('express');
const createError = require('http-errors');

const Customer = require('../../model/customer.model');
const customerService = require('./customer.service');

exports.create = (req, res, next) => {
  const validationErrors = new Customer(req.body).validateSync();
  if (validationErrors) {
    return next(
      new createError.BadRequest(validationErrors)
    );
  }

  return customerService.create(req.body)
    .then(cp => {
      res.status(201);
      res.json(cp);
    })
    .catch(err => next(new createError.InternalServerError(err.message)));
};

exports.findAll = (req, res, next) => {
  return customerService.findAll()
    .then(customers => {
      res.json(customers);
    });
};

exports.findOne = (req, res, next) => {
  return customerService.findOne(req.params.id)
    .then(customer => {
      if (!customer) {
        return next(new createError.NotFound("Customer is not found"));
      }
      return res.json(customer);
    });
};

exports.update = (req, res, next) => {
  const validationErrors = new Customer(req.body).validateSync();
  if (validationErrors) {
    return next(
      new createError.BadRequest(validationErrors)
    );
  }

  return customerService.update(req.params.id, req.body)
    .then(customer => {
      res.json(customer);
    })
    .catch(err => {
      next(new createError.InternalServerError(err.message));
    });
};

exports.delete = (req, res, next) => {
  return customerService.delete(req.params.id)
    .then(() => res.json({}))
    .catch(err => {
      next(new createError.InternalServerError(err.message));
    });
};

exports.findAllName = (req, res, next) => {
  return customerService.findAllName()
    .then(customers => {
      res.json(customers);
    });
};

exports.findOneByEmail = (req, res, next) => {
  return customerService.findOneByEmail(req.params.email)
    .then(customer => {
      if (customer === null) {
        return next(new createError.NotFound("Customer is not found"));
      }
      return res.json(customer);
    });
};
