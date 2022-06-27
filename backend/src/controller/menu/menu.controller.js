const express = require('express');
const createError = require('http-errors');

const Menu = require('../../model/menu.model');
const menuService = require('./menu.service');

exports.findAll = (req, res, next) => {
  return menuService.findAll()
    .then(menus => {
      res.json(menus);
    });
};

exports.findOne = (req, res, next) => {
  return menuService.findOne(req.params.id)
    .then(menu => {
      if (!menu) {
        return next(new createError.NotFound("Menu is not found"));
      }
      return res.json(menu);
    });
};

exports.update = (req, res, next) => {
  const validationErrors = new Menu(req.body).validateSync();
  if (validationErrors) {
    return next(
      new createError.BadRequest(validationErrors)
    );
  }

  return menuService.update(req.params.id, req.body)
    .then(menu => {
      res.json(menu);
    })
    .catch(err => {
      next(new createError.InternalServerError(err.message));
    });
};

exports.findOneWeek = (req, res, next) => {
  return menuService.findOneWeek(req.params.week)
    .then(menu => {
      if (!menu) {
        return next(new createError.NotFound("Menu is not found"));
      }
      return res.json(menu);
    });
};