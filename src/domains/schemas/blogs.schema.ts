import { z } from "zod";

export const BlogsSchema = z.object({
  title: z.string(),
  content: z.string(),
  images: z.array(z.string()),
});

export type BlogsSchemaType = z.infer<typeof BlogsSchema>;
