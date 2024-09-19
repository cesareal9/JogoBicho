import "dotenv/config";
import e from "express";

const Aposta = require("./routes/Aposta.js");
const JogoBicho = require("./routes/JogoBicho.js");

app.use("/Aposta", Aposta);
app.use("/JogoBicho", JogoBicho);

const app = e();
app.listen(process.env.API_PORT, () => {
    console.log(`Server Running in port ${process.env.API_PORT}`);
});
