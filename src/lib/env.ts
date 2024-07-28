import { z } from "zod";

const envSchema = z.object({
  VITE_API_URL_BE: z.string(),
  VITE_API_MESHY_KEY: z.string(),
  VITE_CLERK_PUBLISHABLE_KEY: z.string(),
});

export const env = envSchema.parse({
  VITE_API_URL_BE: import.meta.env.VITE_API_URL_BE as string,
  VITE_API_MESHY_KEY: import.meta.env.VITE_MESHY_KEY as string,
  VITE_CLERK_PUBLISHABLE_KEY: import.meta.env
    .VITE_CLERK_PUBLISHABLE_KEY as string,
});
