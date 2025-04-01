import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { VitePWA } from "vite-plugin-pwa";
import path from "path";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.svg", "logo.svg", "robots.txt"],
      manifest: {
        name: "ARI Dashboard",
        short_name: "Dashboard",
        description: "مدیریت داشبورد پیشرفته",
        theme_color: "#0f172a",
        background_color: "#f1f5f9",
        display: "standalone",
        start_url: "/",
        icons: [
          {
            src: "/logo128.png",
            sizes: "128x128",
            type: "image/png",
          },
          {
            src: "/logo192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/logo512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@app": path.resolve(__dirname, "./src/app"),
      "@images": path.resolve(__dirname, "./src/assets/images"),
      "@services": path.resolve(__dirname, "./src/services"),
      "@schemas": path.resolve(__dirname, "./src/schemas"),
      "@features": path.resolve(__dirname, "./src/app/features"),
    },
  },
});
