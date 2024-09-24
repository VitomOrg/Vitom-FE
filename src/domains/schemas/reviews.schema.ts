import { z } from "zod";

export const ReviewsSchema = z.object({
  productId: z.string(),
  rating: z.number().int().min(1).max(5),
  content: z.string(),
});
