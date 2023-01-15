import { Router } from "express";
import { OrderController } from "../controllers/orderController";

const router = Router();

router.get("/getOrder", OrderController.getOrder);
router.post("/createOrder", OrderController.createOrder);

export default router;
