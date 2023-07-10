class ControllerError extends Error {
  constructor(code, message, name) {
    super(code, message, name);
    this.code = code;
    this.message = message;
    this.name = name;
    Error.captureStackTrace(this, this.constructor);
  }
}
class AppError extends Error {
  constructor(message) {
    super(message);
    this.code = 500;
    this.message = message;
    this.name = 'App Error';
    Error.captureStackTrace(this, this.constructor);
  }
}

class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.code = 400;
    this.message = message;
    this.name = 'Validation Error';
    Error.captureStackTrace(this, this.constructor);
  }
}

class AuthenticationError extends Error {
  constructor(message) {
    super(message);
    this.code = 403;
    this.message = message;
    this.name = 'Authentication Error';
    Error.captureStackTrace(this, this.constructor);
  }
}

class NotFoundError extends Error {
  constructor(message) {
    super(message);
    this.code = 404;
    this.message = message;
    this.name = 'Not Found';
    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = { AppError, ValidationError, AuthenticationError, NotFoundError, ControllerError };
