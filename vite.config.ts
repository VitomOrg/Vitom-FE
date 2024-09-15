import react from "@vitejs/plugin-react-swc";
import path from "path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "${path.resolve(
          __dirname,
          "src/styles/tailwind.config.cjs"
        )}";`,
      },
    },
  },
  assetsInclude: ["**/*.fbx", "**/*.glb", "**/*.obj", "**/*.mtl"],
  build: {
    rollupOptions: {
      onwarn(warning, warn) {
        if (warning.code === "EVAL") return;
        warn(warning);
      },

      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return id.toString().split("node_modules/")[1].split("/")[0];
          }
        },
      },
    },

    chunkSizeWarningLimit: 1024,
  },
});
