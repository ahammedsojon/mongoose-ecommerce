import Product from "../products/product.model";
import IOrder from "./order.interface";
import Order from "./order.model";

const insertOrderIntoDB = async (payload: IOrder) => {
  const { productId, email } = payload;
  const product = await Product.findById(productId);
  if (!product) {
    throw new Error("Order not found");
  }

  if (product && product?.inventory.quantity < payload.quantity) {
    throw new Error("Insufficient quantity available in inventory");
  }

  const productQuantity =
    product && product?.inventory.quantity - payload.quantity;

  if (product?.inventory.quantity === 0) {
    await Product.findByIdAndUpdate(productId, {
      "product.inventory": { quantity: productQuantity, inStock: false },
    });
  } else {
    await Product.findByIdAndUpdate(productId, {
      "product.inventory": { quantity: productQuantity, inStock: true },
    });
  }
  const result = await Order.create(payload);

  return result;
};

const getOrdersFromDB = async (queryString: string) => {
  const queryOptions = queryString ? { email: queryString } : {};
  const result = await Order.find(queryOptions);

  return result;
};

export const OrderService = {
  insertOrderIntoDB,
  getOrdersFromDB,
};
