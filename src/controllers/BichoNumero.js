const BichoNumero = require("../models/BichoNumero.js");

exports.getBichoNumeros = async (req, res) => {
    try {
        const BichoNumeros = await BichoNumero.find();
        res.status(200).json(BichoNumeros);
    } catch (error) {
        res.status(400).json({ error: "Erro ao buscar BichoNumeros" });
    }
};

exports.getBichoNumeroById = async (req, res) => {
    try {
        const BichoNumero = await BichoNumero.findById(req.params.id);
        res.status(200).json(BichoNumero);
    } catch (error) {
        res.status(404).json({ error: "BichoNumero não encontrado" });
    }
};

//{ new: true } retorna o novo documento atualizado

exports.deleteBichoNumero = async (req, res) => {
    try {
        await BichoNumero.findByIdAndDelete(req.params.id);
        res.status(204).json();
    } catch (error) {
        res.status(400).json({ error: "Erro ao deletar BichoNumero" });
    }
};
