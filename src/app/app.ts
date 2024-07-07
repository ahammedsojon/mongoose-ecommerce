import cors from "cors";
import express from "express";
import { OrderRoute } from "./modules/orders/order.route";
import { ProductRoute } from "./modules/products/product.route";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/products", ProductRoute);
app.use("/api/orders", OrderRoute);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

export default app;
