import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ["chunk-D3QKIUYN", "chunk-HWFHCC37"], // Exclude problematic dependencies
  },
});
