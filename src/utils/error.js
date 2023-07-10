const ErrorResponse = (typeError, message) => {
  return {
    typeError,
    message
  }
}

module.exports = ErrorResponse;