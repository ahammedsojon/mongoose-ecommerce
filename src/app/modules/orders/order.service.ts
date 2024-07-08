import IOrder from "./order.interface";
import Order from "./order.model";

const insertOrderIntoDB = async (payload: IOrder) => {
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
