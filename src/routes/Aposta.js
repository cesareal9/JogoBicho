const express = require("express");
const router = express.Router();
const Aposta_controller = require("../controllers/Aposta.js");

router.post("/", Aposta_controller.createAposta);
router.get("/", Aposta_controller.getApostas);
router.get("/:id", Aposta_controller.getApostaById);
router.put("/:id", Aposta_controller.updateAposta);
router.delete("/:id", Aposta_controller.deleteAposta);

module.exports = router;
