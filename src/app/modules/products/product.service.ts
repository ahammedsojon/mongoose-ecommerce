import IProduct from "./product.interface";
import Product from "./product.model";

const insertProductIntoDB = async (payload: IProduct) => {
  const result = await Product.create(payload);

  return result;
};

const getProductsFromDB = async (queryString: string) => {
  let queryOptions = {};
  if (queryString) {
    queryOptions = {
      $or: [
        {
          name: {
            $regex: queryString,
            $options: "i",
          },
        },
        {
          description: {
            $regex: queryString,
            $options: "i",
          },
        },
      ],
    };
  }
  const result = await Product.find(queryOptions);
  console.log(result);

  return result;
};

const getSingleProductFromDB = async (id: string) => {
  const result = await Product.findById(id);
  if (!result) {
    throw new Error("Product not found!");
  }

  return result;
};

const updateProductFromDB = async (id: string, payload: object) => {
  const product = await Product.findById(id);

  if (!product) {
    throw new Error("Product not found!");
  }
  const result = await Product.findByIdAndUpdate(id, payload, { new: true });

  return result;
};

const deleteProductFromDB = async (id: string) => {
  const product = await Product.findById(id);

  if (!product) {
    throw new Error("Product not found!");
  }
  await Product.findByIdAndDelete(id);
};

export const ProductService = {
  insertProductIntoDB,
  getProductsFromDB,
  getSingleProductFromDB,
  deleteProductFromDB,
  updateProductFromDB,
};
