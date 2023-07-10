"use strict";
const { Schema, model } = require("mongoose");

const ProjectsSchema = new Schema(
  {
    title: String,
    subTitle: String,
    dateProyect: String,
    location: String,
    resume: String,
    description: String,
    diferencial: String,
    conclusion: String,
    images: [String]
  },
  {
    timestamps: {
      createdAt: "created_at",
      updateAt: "update_at",
    },
  }
);

module.exports = model("projects", ProjectsSchema);
