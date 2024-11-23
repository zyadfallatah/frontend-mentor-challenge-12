import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/frontend-mentor-challenge-12",
  server: {
    port: 3000,
  },
});
