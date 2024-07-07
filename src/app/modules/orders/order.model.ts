import mongoose, { Schema } from "mongoose";
import IOrder from "./order.interface";

const OrderSchema: Schema = new Schema({
  email: { type: String, required: true },
  productId: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
});

// Create and export the model
const Order = mongoose.model<IOrder>("Order", OrderSchema);

export default Order;
