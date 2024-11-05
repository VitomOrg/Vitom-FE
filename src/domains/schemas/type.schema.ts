import z from "zod";

export const TypeSchema = z.object({
  name: z.string(),
  description: z.string(),
});

export type TypeFormValues = z.infer<typeof TypeSchema>;
