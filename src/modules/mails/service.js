const { AppError } = require('../../helpers/errors.helper');
const { MailsModel } = require('../../models'); 
const Mailer = require('../../utils/mailer'); 

const service = {};

service.findAll = async () => {};

service.findOne = async () => {};

service.create = async (email) => {
  try {
    const result = await MailsModel.create(email);
    await result.save();
    await Mailer.sendEmail('Nuevo Contacto', email, 'contact');
    return result;
  } catch (e) {
    console.log(e);
    throw new AppError(e.message);
  }
};

service.update = async () => {};

service.delete = async () => {};

module.exports = service;