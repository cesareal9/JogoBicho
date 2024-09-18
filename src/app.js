import "dotenv/config";
import e from "express";

const Aposta = require("./routes/Aposta.js");
const JogoBicho = require("./routes/JogoBicho.js");

app.use("/Aposta", Apostas);
app.use("/JogoBicho", JogoBichos);

const app = e();
app.listen(process.env.API_PORT, () => {
    console.log(`Server Running in port ${process.env.API_PORT}`);
});
