import { z } from "zod";

export const ReviewsSchema = z.object({
  productId: z
    .string()
    .min(1, { message: "Product ID is required" })
    .regex(/^[a-zA-Z0-9_-]+$/, { message: "Invalid Product ID format" }),
  rating: z
    .number()
    .int({ message: "Rating must be an integer" })
    .min(1, { message: "Rating must be at least 1" })
    .max(5, { message: "Rating must be no more than 5" }),
  content: z
    .string()
    .min(10, { message: "Content must be at least 10 characters" })
    .max(500, { message: "Content must be no more than 500 characters" }),
});
