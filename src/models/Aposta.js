const mongoose = require("mongoose");

const ApostaSchema = new mongoose.Schema({
    Valor: { type: Number, required: true },
    Retorno: { type: Number },
    numeros: { type: Number, require: true },
    Pix: { type: String, require: true },
    createdAt: { type: Date },
});

const Aposta = mongoose.model("Aposta", ApostaSchema);

module.exports = Aposta;
