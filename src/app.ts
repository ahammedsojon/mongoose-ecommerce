import cors from "cors";
import express, { Application, Request, Response } from "express";
import { OrderRoute } from "../src/app/modules/orders/order.route";
import { ProductRoute } from "../src/app/modules/products/product.route";

const app: Application = express();
app.use(express.json());
app.use(cors());

app.use("/api/products", ProductRoute);
app.use("/api/orders", OrderRoute);

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to mongoose ecommerce!");
});

app.use((req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

export default app;
