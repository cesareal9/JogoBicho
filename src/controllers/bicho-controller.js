import Bicho from "../models/bicho-model";

async function store(req, res) {
    try {
        await Bicho.create(req.body);
        res.json();
    } catch (error) {
        res.status(400).json(error);
    }
}
