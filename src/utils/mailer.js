const handlebars = require("handlebars");
const fs = require("fs");
const path = require("path");
const dir = path.resolve(process.env.PWD, "./src/config/nodemailer/templates");
const smtpTransport = require("../config/nodemailer/config");
const emailBussisnes = process.env.EMAIL;
require("dotenv").config();

class Mailer {
  static async sendEmail(subject, data, typeEmail) {
    const template = listTypeEmail(typeEmail);
    const htmlToSend = template(data);
    mailOptions.from = data.mail;
    mailOptions.to = emailBussisnes;
    mailOptions.subject = subject;
    mailOptions.html = htmlToSend;
    return await sendMail(mailOptions);
  }
}

const mailOptions = {
  from: "",
  to: "",
  subject: "",
  html: "",
};

const listTypeEmail = (typeEmail = "contact") => {
  let emailTemplateSource;
  if (typeEmail === "contact") emailTemplateSource = `${dir}/contact.hbs`;
  const template = fs.readFileSync(emailTemplateSource, "utf8");
  return handlebars.compile(template);
};

const sendMail = (mailOptions) => {
  return new Promise((resolve) => {
    smtpTransport.sendMail(mailOptions, (error, response) => {
      resolve(resultMail(error, response));
    });
  });
};

const resultMail = (error, response) => {
  if (error) throw new Error(error.message);
  else console.log(response);
}

module.exports = Mailer;
