const nodemailer = require("nodemailer");
const smtpTransport = require('nodemailer-smtp-transport');
require("dotenv").config();

const smtp = nodemailer.createTransport(
  smtpTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSEMAIL,
    },
  })
);

module.exports = smtp;