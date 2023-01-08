const express = require("express");
const router = express.Router();
const controller = require("../controller/index.controller");

router.get("/", controller.index);
router.get("/:categoria", controller.categoria);
router.get("/:categoria/:id", controller.itemCategoria);

module.exports = router;
