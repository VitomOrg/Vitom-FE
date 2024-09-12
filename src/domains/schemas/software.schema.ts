import z from "zod";

export const SoftwareSchema = z.object({
  name: z.string(),
  description: z.string(),
});
