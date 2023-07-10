const { AppError } = require('../../helpers/errors.helper');
const { ProjectsModel } = require('../../models')

const service = {};

service.findAll = async () => {
  try {
    const result = await ProjectsModel.find();
    return result;
  } catch (e) {
    console.log(e);
    throw new AppError(e.message);
  }
};

service.findOne = async (id) => {
  try {
    const result = await ProjectsModel.findById(id);
    return result;
  } catch (e) {
    console.log(e);
    throw new AppError(e.message);
  }
};

service.create = async (project) => {
  try {
    const result = await ProjectsModel.create(project);
    return result;
  } catch (e) {
    console.log(e);
    throw new AppError(e.message);
  }
};

service.update = async () => {};

service.delete = async () => {};

module.exports = service;