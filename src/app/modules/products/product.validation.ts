import { z } from "zod";

const createProductZodSchema = z.object({
  name: z.string().min(4, { message: "Name is required." }),
  description: z.string().min(1, { message: "Description is required." }),
  price: z.number().min(0.01, { message: "Price must be greater than 0." }),
  category: z.string().min(1, { message: "Category is required." }),
  tags: z.array(z.string(), {
    message: "Category tags must be provided.",
  }),
  variants: z.array(
    z.object({
      type: z.string().min(1, { message: "Variant type is required." }),
      value: z.string().min(1, { message: "Variant value is required." }),
    })
  ),
  inventory: z.object({
    quantity: z
      .number()
      .min(1, { message: "Quantity must be greater than 0." }),
    stock: z.boolean().default(false), // Optional field with a default value
  }),
});

const updateProductZodSchema = z.object({
  name: z.string().min(4, { message: "Name is required." }).optional(),
  description: z
    .string()
    .min(1, { message: "Description is required." })
    .optional(),
  price: z
    .number()
    .min(0.01, { message: "Price must be greater than 0." })
    .optional(),
  category: z.string().min(1, { message: "Category is required." }).optional(),
  tags: z
    .array(z.string(), {
      message: "Category tags must be provided.",
    })
    .optional(),
  variants: z
    .array(
      z.object({
        type: z.string().min(1, { message: "Variant type is required." }),
        value: z.string().min(1, { message: "Variant value is required." }),
      })
    )
    .optional(),
  inventory: z
    .object({
      quantity: z
        .number()
        .min(1, { message: "Quantity must be greater than 0." })
        .optional(),
      stock: z.boolean().default(false).optional(), // Optional field with a default value
    })
    .optional(),
});

export const ProductValidation = {
  createProductZodSchema,
  updateProductZodSchema,
};
