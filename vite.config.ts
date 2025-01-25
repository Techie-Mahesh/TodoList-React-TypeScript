import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslintPlugin from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    eslintPlugin({
      // ESLint configuration for Vite
      cache: false, // Disable caching to ensure fresh linting during each development run
      emitWarning: true, // Show warnings without breaking the build
      emitError: true // Show errors as well
    })
  ]
});
