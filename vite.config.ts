import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vite.dev/config/
export default defineConfig({
  plugins: [preact(), tailwindcss(), tsconfigPaths()],
  base: "/ftd-Portefeuille",
  server: {
    port: 6969,
  },
});
