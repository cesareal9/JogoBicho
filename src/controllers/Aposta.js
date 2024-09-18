const Aposta = require("../models/Aposta.js");

exports.createAposta = async (req, res) => {
    try {
        const Aposta = new Aposta(req.body);
        await Aposta.save();
        res.status(201).json(Aposta);
    } catch (error) {
        res.status(400).json({ error: "Erro ao criar Aposta" });
    }
};

exports.getApostas = async (req, res) => {
    try {
        const Apostas = await Aposta.find();
        res.status(200).json(Apostas);
    } catch (error) {
        res.status(400).json({ error: "Erro ao buscar Apostas" });
    }
};

exports.getApostaById = async (req, res) => {
    try {
        const Aposta = await Aposta.findById(req.params.id);
        res.status(200).json(Aposta);
    } catch (error) {
        res.status(404).json({ error: "Aposta não encontrado" });
    }
};

//{ new: true } retorna o novo documento atualizado
exports.updateAposta = async (req, res) => {
    try {
        const Aposta = await Aposta.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(Aposta);
    } catch (error) {
        res.status(400).json({ error: "Erro ao atualizar Aposta" });
    }
};

exports.deleteAposta = async (req, res) => {
    try {
        await Aposta.findByIdAndDelete(req.params.id);
        res.status(204).json();
    } catch (error) {
        res.status(400).json({ error: "Erro ao deletar Aposta" });
    }
};
