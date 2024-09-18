const express = require("express");
const router = express.Router();
const BichoNumero_controller = require("../controllers/BichoNumero.js");

router.get("/", BichoNumero_controller.getBichoNumeros);
router.get("/:numero", BichoNumero_controller.getBicho);
module.exports = router;
