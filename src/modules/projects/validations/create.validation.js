const { check } = require('express-validator');
const validate = require('../../../middlewares/validation.middleware');

const CreateValidation = [
  check("title", "El campo title es obligatorio").notEmpty(),
  check("subTitle", "El campo subTitle es obligatorio").notEmpty(),
  check("dateProyect", "El campo dateProyect es obligatorio").notEmpty(),
  check("location", "El campo location es obligatorio").notEmpty(),
  check("resume", "El campo resume es obligatorio").notEmpty(),
  check("description", "El campo description es obligatorio").notEmpty(),
  check("diferencial", "El campo diferencial es obligatorio").notEmpty(),
  check("conclusion", "El campo conclusion es obligatorio").notEmpty(),
  validate
]

module.exports = CreateValidation;