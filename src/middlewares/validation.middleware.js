const { validationResult } = require("express-validator");
const { ValidationError } = require("../helpers/errors.helper");

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return next(new ValidationError(errors.errors[0].msg));
  return next();
};

module.exports = validate;