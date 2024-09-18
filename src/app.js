import "dotenv/config";
import e from "express";

const app = e();
app.listen(process.env.API_PORT, () => {
    console.log(`Server Running in port ${process.env.API_PORT}`);
});
