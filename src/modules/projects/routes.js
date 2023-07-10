const express = require("express");
const { CreateValidation } = require('./validations')
const router = express.Router();

const controller = require("./controller");

router.get("/", controller.findAll);

router.get("/:id", controller.findOne);

router.post("/", [...CreateValidation], controller.create);

router.patch("/:id", controller.update);

router.delete("/:id", controller.delete);

module.exports = router;