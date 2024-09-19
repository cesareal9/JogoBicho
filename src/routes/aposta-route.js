import e from "express";
import apostaController from "../controllers/aposta-controller";
const router = e.Router();

router.post("/", apostaController.store);
router.get("/", apostaController.index);
router.get("/:id", apostaController.show);
router.put("/:id", apostaController.update);
