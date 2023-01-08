const express = require("express");
const app = express();
const router = require("../routes/index.router");

app.set("json spaces", 2);

app.use(router);

module.exports = app;
