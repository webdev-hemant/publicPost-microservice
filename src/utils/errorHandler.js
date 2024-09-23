const { NODE_ENV } = require("../config/allEnv");

const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode !== 200 ? res.statusCode : 500;
  res.status(statusCode).json({
    message: err.message,
    stack: NODE_ENV === "PROD" ? null : err.stack,
  });
};

module.exports = errorHandler;
