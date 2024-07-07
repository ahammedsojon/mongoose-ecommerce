import express from "express";
import { OrderController } from "./order.controller";

const router = express.Router();

router.post("/", OrderController.insertOrder);
router.get("/", OrderController.getAllOrders);

export const OrderRoute = router;
