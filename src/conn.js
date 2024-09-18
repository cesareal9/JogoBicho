import mongoose from "mongoose";

const mongoDB = "mongodb://localhost:27017";
const database = "JogoBicho";

const main = async () => {
    try {
        await mongoose.connect(mongoDB + database);
        console.log("Conectado com sucesso");
    } catch (error) {
        console.log(error);
    }
};

main();

export default mongoose;


//teste