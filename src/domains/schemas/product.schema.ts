import { z } from "zod";

export const ProductSchema = z.object({
  license: z.number(),
  name: z.string(),
  description: z.string(),
  price: z.number(),
  downloadUrl: z.string(),
});
