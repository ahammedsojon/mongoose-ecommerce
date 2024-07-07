import { OrderService } from "./order.service";
import { OrderValidation } from "./order.validation";

const insertOrder = async (req, res) => {
  try {
    const data = req.body;
    console.log(data);

    const validateData = OrderValidation.createOrderZodSchema.parse(data);

    const result = await OrderService.insertOrderIntoDB(validateData);
    res.status(201).json({
      success: true,
      message: "Order created successfully!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "something went wrong!",
      error: error,
    });
  }
};

const getAllOrders = async (req, res) => {
  try {
    const { email } = req.query;
    const result = await OrderService.getOrdersFromDB(email);

    res.status(200).json({
      success: true,
      message: email
        ? "Orders fetched successfully for user email!"
        : "Orders fetched successfully!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "something went wrong!",
      error: error,
    });
  }
};

export const OrderController = {
  insertOrder,
  getAllOrders,
};
