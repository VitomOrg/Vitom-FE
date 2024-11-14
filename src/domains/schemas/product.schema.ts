import { z } from "zod";

// Custom schema for files (File or Blob)
export const FileSchema = z.instanceof(Blob).refine((file) => file.size > 0, {
  message: "File is required and cannot be empty",
});

export const ProductSchema = z.object({
  license: z.number(),
  name: z
    .string()
    .min(1, { message: "Name is required" })
    .max(30, { message: "Name must not exceed 30 characters" }),
  description: z
    .string()
    .min(1, { message: "Description is required" })
    .max(500, { message: "Description must not exceed 500 characters" }),
  price: z
    .number()
    .min(10000, { message: "Price must be at least 10000" })
    .max(900000, { message: "Price must not exceed 900000" }),
  typeIds: z.array(
    z.string().uuid({ message: "Invalid UUID format for typeIds" })
  ),
  softwareIds: z.array(
    z.string().uuid({ message: "Invalid UUID format for softwareIds" })
  ),
  files: z.array(FileSchema || z.string().url()),
  modelMaterialFiles: z.array(FileSchema || z.string().url()),
  fbx: FileSchema || z.string().url(),
  obj: FileSchema || z.string().url(),
  glb: FileSchema || z.string().url(),
});

export type ProductTypeSchema = z.infer<typeof ProductSchema>;
