import { z } from "zod";

const envSchema = z.object({
  VITE_API_URL_BE: z.string(),
  VITE_API_MESHY_KEY: z.string(),
  VITE_CLERK_PUBLISHABLE_KEY: z.string(),
  VITE_FIREBASE_API_KEY: z.string(),
  VITE_FIREBASE_AUTH_DOMAIN: z.string(),
  VITE_FIREBASE_PROJECT_ID: z.string(),
  VITE_FIREBASE_STORAGE_BUCKET: z.string(),
  VITE_FIREBASE_MESSAGING_SENDER_ID: z.string(),
  VITE_FIREBASE_APP_ID: z.string(),
});

export const env = envSchema.parse({
  VITE_API_URL_BE: import.meta.env.VITE_API_URL_BE as string,
  VITE_API_MESHY_KEY: import.meta.env.VITE_MESHY_KEY as string,
  VITE_CLERK_PUBLISHABLE_KEY: import.meta.env
    .VITE_CLERK_PUBLISHABLE_KEY as string,
  VITE_FIREBASE_API_KEY: import.meta.env.VITE_FIREBASE_API_KEY as string,
  VITE_FIREBASE_AUTH_DOMAIN: import.meta.env
    .VITE_FIREBASE_AUTH_DOMAIN as string,
  VITE_FIREBASE_PROJECT_ID: import.meta.env.VITE_FIREBASE_PROJECT_ID as string,
  VITE_FIREBASE_STORAGE_BUCKET: import.meta.env
    .VITE_FIREBASE_STORAGE_BUCKET as string,
  VITE_FIREBASE_MESSAGING_SENDER_ID: import.meta.env
    .VITE_FIREBASE_MESSAGING_SENDER_ID as string,
  VITE_FIREBASE_APP_ID: import.meta.env.VITE_FIREBASE_APP_ID as string,
});
