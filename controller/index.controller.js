const data = require("../models/index.model.json");

module.exports = {
    index: (req, res) => {
        res.status(200).send(data);
    },
    categoria: (req, res) => {
        const categoria = req.params.categoria;

        if(data[categoria]) {
            res.status(200).json({[categoria]: data[categoria]});
        } else {
            res.status(400).json({"error_message": `A categoria '${categoria}' não foi encontrada!`});
        }
    },
    itemCategoria: (req, res) => {
        const id = req.params.id;
        const categoria = req.params.categoria;

        if(!id) {
            return res.status(400).json({message: "id não encontrado!"});
        }

        if(data[categoria][id]) {
            return res.status(200).json({[categoria]: data[categoria][id]});
        } else if(!data[categoria]) {
            return res.status(400).json({[categoria]: {
                texto: `A categoria '${categoria}' não foi encontrada!`
            }});
        } else {
            return res.status(400).json({[categoria]: {
                texto: `O id '${id}' não foi encontrado nesta categoria!`
            }});
        }
    }
};
