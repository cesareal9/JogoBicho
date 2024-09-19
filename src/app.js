import "dotenv/config";
import e from "express";

import jogoRouter from "./routes/jogo-route.js";

import bichoRouter from "./routes/bicho-route.js";
import apostaRouter from "./routes/aposta-route.js";

const app = e();

app.use


app.listen(process.env.API_PORT, () => {
    console.log(`Server Running in port ${process.env.API_PORT}`);
});
