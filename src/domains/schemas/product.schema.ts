import { z } from "zod";

// Custom schema for files (File or Blob)
const MAX_FILE_SIZE = 5000000;

export const FileSchema = z
  .instanceof(Blob)
  .refine((file) => file.size > 0, {
    message: "File is required and cannot be empty",
  })
  .refine((file) => file.size < MAX_FILE_SIZE, {
    message: `File size must not exceed ${MAX_FILE_SIZE / 1000000}MB`,
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
  files: z.array(z.union([z.string().url(), FileSchema])),
  modelMaterialFiles: z.array(z.union([z.string().url(), FileSchema])),
  fbx: z.union([z.string().url(), FileSchema]),
  obj: z.union([z.string().url(), FileSchema]),
  glb: z.union([z.string().url(), FileSchema]),
});

export type ProductTypeSchema = z.infer<typeof ProductSchema>;
