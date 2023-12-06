import { resolve } from "path";
import { defineConfig } from "vite";
import pluginPurgeCSS from "vite-plugin-purge";

export default defineConfig({
  root: resolve(__dirname, "src/"),
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        home: resolve(__dirname, "src/index.html"),
        about: resolve(__dirname, "src/about/index.html"),
        contact: resolve(__dirname, "src/contact/index.html"),
      },
    },
  },
  plugins: [
    pluginPurgeCSS({
      content: ["**/*.html", "**/*.js"],
    }),
  ],
});
