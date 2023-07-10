const mongoConnect = require('./mongodb/connect');

const db = async () => {
  try {
    await mongoConnect();
  } catch (error) {
    throw new AppError(error.message);
  }
}

module.exports = db;