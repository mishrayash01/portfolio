import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  assetsInclude: ['**/*.MP4'], // Explicitly include uppercase MP4 files
  plugins: [
    react(),
  ],
  server: {
    allowedHosts: true,
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    chunkSizeWarningLimit: 5000,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
