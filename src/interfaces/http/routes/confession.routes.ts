import { Router } from "express";
import { ConfessionController } from "../controllers/ConfessionController";

const router = Router();

router.get('/', ConfessionController.getAll);

export { router as confessionRoutes };