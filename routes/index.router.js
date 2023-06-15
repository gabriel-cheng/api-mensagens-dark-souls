const express = require("express");
const router = express.Router();
const controller = require("../controller/index.controller");
const cors = require("cors");

router.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    router.use(cors());
    next();
});

router.get("/", controller.index);
router.get("/:categoria", controller.categoria);
router.get("/:categoria/:id", controller.itemCategoria);

module.exports = router;
