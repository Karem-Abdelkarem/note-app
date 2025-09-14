import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";

export default defineConfig({
  plugins: [tailwindcss()],
  base: "/note-app/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        addNote: resolve(__dirname, "add-note.html"),
      },
    },
  },
});
