import { z } from "zod";

export const ReviewsSchema = z.object({
  rating: z.number(),
  content: z.string(),
});
