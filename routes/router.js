const express = require('express');
const router = express.Router();
const data = require('../models/database.json');

router.get('/', (req, res) => {
    res.status(200).send(data);
});

router.get('/:categoria', (req, res) => {
    if(data[req.params.categoria]) {
        const parameter = req.params.categoria;

        res.status(200).send(data[parameter]);
    } else {
        res.status(400).send({"error_message": `A categoria '${req.params.categoria}' não foi encontrada!`});
    }
});

module.exports = router;
