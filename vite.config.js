import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    headers: {
      "Content-Security-Policy": "style-src 'self' 'unsafe-inline';",
    },
  },
  css: {
    modules: {
      scopeBehaviour: "local", // تأكد أن القيمه 'local' وليس 'global'
    },
  },
});
