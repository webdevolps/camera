const SuccessResponse = require("../../utils/success");
const { ControllerError } = require('../../helpers/errors.helper')
const service = require('./service');
const controller = {};

controller.findAll = async (req, res, next) => {
  try {
    const result = await service.findAll();
    res.status(200).json(SuccessResponse(result, 'Ok!'));
  } catch (e) {
    console.log(e);
    return next(new ControllerError(e.code, e.message, e.name));
  }
};

controller.findOne = async (req, res, next) => {
  try {
    const result = await service.findOne();
    res.status(200).json(SuccessResponse(result, 'Ok!'));
  } catch (e) {
    console.log(e);
    return next(new ControllerError(e.code, e.message, e.name));
  }
};

controller.create = async (req, res, next) => {
  try {
    const body = req.body
    const result = await service.create(body);
    res.status(200).json(SuccessResponse(result, 'Ok!'));
  } catch (e) {
    console.log(e);
    return next(new ControllerError(e.code, e.message, e.name));
  }
};

controller.update = async (req, res, next) => {
  try {
    const result = await service.update();
    res.status(200).json(SuccessResponse(result, 'Ok!'));
  } catch (e) {
    console.log(e);
    return next(new ControllerError(e.code, e.message, e.name));
  }
};

controller.delete = async (req, res, next) => {
  try {
    const result = await service.delete();
    res.status(200).json(SuccessResponse(result, 'Ok!'));
  } catch (e) {
    console.log(e);
    return next(new ControllerError(e.code, e.message, e.name));
  }
};

module.exports = controller;