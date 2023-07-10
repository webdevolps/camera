const errorResponse = require('../utils/error');

const ErrorHandler = (err, req, res, next) => {
  return res.status(err.code).json(
    errorResponse(err.name, err.message)
  );
}

module.exports = ErrorHandler;