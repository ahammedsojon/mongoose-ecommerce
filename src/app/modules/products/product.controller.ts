import { ProductService } from "./product.service";
import { ProductValidation } from "./product.validation";

const insertProduct = async (req, res) => {
  try {
    const data = req.body;

    const validateData = ProductValidation.createProductZodSchema.parse(data);

    const result = await ProductService.insertProductIntoDB(validateData);
    res.status(201).json({
      success: true,
      message: "Product created successfully!",
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

const getAllProducts = async (req, res) => {
  try {
    const { searchTerm } = req.query;

    const result = await ProductService.getProductsFromDB(searchTerm);

    res.status(200).json({
      success: true,
      message: "Products fetched successfully!",
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

const getSingleProduct = async (req, res) => {
  try {
    const { productId } = req.params;

    const result = await ProductService.getSingleProductFromDB(productId);
    res.status(200).json({
      success: true,
      message: "Product fetched successfully!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message || "something went wrong!",
      error: error,
    });
  }
};

const udpateProduct = async (req, res) => {
  try {
    const data = req.body;
    const productData = ProductValidation.updateProductZodSchema.parse(data);
    const { productId } = req.params;

    const result = await ProductService.updateProductFromDB(
      productId,
      productData
    );
    res.status(200).json({
      success: true,
      message: "Product updated successfully!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message || "something went wrong!",
      error: error,
    });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { productId } = req.params;

    const result = await ProductService.deleteProductFromDB(productId);
    res.status(200).json({
      success: true,
      message: "Product deleted successfully!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message || "something went wrong!",
      error: error,
    });
  }
};

export const ProductController = {
  insertProduct,
  getAllProducts,
  getSingleProduct,
  deleteProduct,
  udpateProduct,
};
