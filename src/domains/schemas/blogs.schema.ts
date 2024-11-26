import { FileSchema } from "@/domains/schemas/product.schema";
import { z } from "zod";

export const BlogsSchema = z.object({
  title: z.string(),
  content: z.string(),
  images: z.array(z.union([z.string().url(), FileSchema])),
});

export type BlogsSchemaType = z.infer<typeof BlogsSchema>;
