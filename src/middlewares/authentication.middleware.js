const jwt = require("jsonwebtoken");
const { AuthenticationError } = require('../helpers/errors');
const config = process.env;

const AuthenticationHandler = (req, res, next) => {
  try {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (!token) throw new Error("A token is required for authentication")
    const decoded = jwt.verify(token, config.SECRET);
    req.user = decoded;
    return next();
  } catch (error) {
    return next(new AuthenticationError(error.message));
  }
};

module.exports = AuthenticationHandler;