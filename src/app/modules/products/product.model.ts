import mongoose, { Schema } from "mongoose";
import IProduct from "./product.interface";

// Define the Mongoose schema
const productSchema = new Schema<IProduct>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  tags: { type: [String], required: true }, // Array of strings
  variants: [
    {
      type: { type: String, required: true },
      value: { type: String, required: true },
    },
  ],
  inventory: {
    quantity: { type: Number, required: true },
    stock: { type: Boolean, required: true },
  },
});

// Create and export the Mongoose model
const Product = mongoose.model<IProduct>("Product", productSchema);

export default Product;
