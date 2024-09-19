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

// const bichoSchema = new Schema({
//     Animais: [
//         {
//             nome: {
//                 type: Schema.Types.String,
//                 required: true,
//             },
//             numero: [
//                 {
//                     type: Schema.Types.Number,
//                 },
//             ],
//         },
//     ],
// });

// const Zoologico = conn.model("Zoologico", ZoologicoSchema);

// Zoologico.create({
//     Animal: [
//         {
//             nome: "Avestruz",
//             numero: [1, 2, 3, 4],
//         },
//         {
//             nome: "Águia",
//             numero: [5, 6, 7, 8],
//         },
//         {
//             nome: "Burro",
//             numero: [9, 10, 11, 12],
//         },
//         {
//             nome: "Borboleta",
//             numero: [13, 14, 15, 16],
//         },
//         {
//             nome: "Cachorro",
//             numero: [17, 18, 19, 20],
//         },
//         {
//             nome: "Cabra",
//             numero: [21, 22, 23, 24],
//         },
//         {
//             nome: "Carneiro",
//             numero: [25, 26, 27, 28],
//         },
//         {
//             nome: "Camelo",
//             numero: [29, 30, 31, 32],
//         },
//         {
//             nome: "Cobra",
//             numero: [33, 34, 35, 36],
//         },
//         {
//             nome: "Coelho",
//             numero: [37, 38, 39, 40],
//         },
//         {
//             nome: "Cavalo",
//             numero: [41, 42, 43, 44],
//         },
//         {
//             nome: "Elefante",
//             numero: [45, 46, 47, 48],
//         },
//         {
//             nome: "Galo",
//             numero: [49, 50, 51, 52],
//         },
//         {
//             nome: "Gato",
//             numero: [53, 54, 55, 56],
//         },
//         {
//             nome: "Jacaré",
//             numero: [57, 58, 59, 60],
//         },
//         {
//             nome: "Leão",
//             numero: [61, 62, 63, 64],
//         },
//         {
//             nome: "Macaco",
//             numero: [65, 66, 67, 68],
//         },
//         {
//             nome: "Porco",
//             numero: [69, 70, 71, 72],
//         },
//         {
//             nome: "Pavao",
//             numero: [73, 74, 75, 76],
//         },
//         {
//             nome: "Peru",
//             numero: [77, 78, 79, 80],
//         },
//         {
//             nome: "Touro",
//             numero: [81, 82, 83, 84],
//         },
//         {
//             nome: "Tigre",
//             numero: [85, 86, 87, 88],
//         },
//         {
//             nome: "Urso",
//             numero: [89, 90, 91, 92],
//         },
//         {
//             nome: "Veado",
//             numero: [93, 94, 95, 96],
//         },
//         {
//             nome: "Vaca",
//             numero: [97, 98, 99, 100],
//         },
//     ],
// });

// export default Zoologico;
