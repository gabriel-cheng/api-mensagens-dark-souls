const express = require('express');
const router = express.Router();
const data = require('../models/database.json');

router.get('/', (req, res) => {
    res.status(200).send(data);
});

router.get('/:param', (req, res) => {
    if(data[req.params.param]) {
        const a = req.params.param;

        res.status(200).send(data[a]);
    } else {
        res.status(400).send({"error_message": "Valores não encontrados!"});
    }
});

module.exports = router;
