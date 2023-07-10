"use strict";
const { Schema, model } = require("mongoose");

const MailSchema = new Schema(
  {
    name: String,
    mail: String,
    phone: String,
    comment: String
  },
  {
    timestamps: {
      createdAt: "created_at",
      updateAt: "update_at",
    },
  }
);

module.exports = model("mails", MailSchema);
