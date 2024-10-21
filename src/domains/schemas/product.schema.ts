import { z } from "zod";

export const ProductSchema = z.object({
  license: z.number(),
  name: z.string(),
  description: z.string(),
  price: z.number(),
  typeIds: z.array(z.string()),
  softwareIds: z.array(z.string()),
  file: z.array(z.unknown()),
  modelMaterialFiles: z.array(z.unknown()),
  fbx: z.string(),
  obj: z.string(),
  glb: z.string(),
});

export type ProductTypeSchema = z.infer<typeof ProductSchema>;
