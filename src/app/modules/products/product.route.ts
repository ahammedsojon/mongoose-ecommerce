import express from "express";
import { ProductController } from "./product.controller";

const router = express.Router();

router.post("/", ProductController.insertProduct);
router.get("/", ProductController.getAllProducts);
router.get("/:productId", ProductController.getSingleProduct);
router.put("/:productId", ProductController.udpateProduct);
router.delete("/:productId", ProductController.deleteProduct);

export const ProductRoute = router;
