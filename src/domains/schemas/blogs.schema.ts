import { z } from "zod";

export const BlogsSchema = z.object({
  Id: z.string().optional(),
  Title: z.string(),
  Content: z.string(),
  Images: z.array(z.string()),
});
