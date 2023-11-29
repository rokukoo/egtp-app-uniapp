import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";
import MiniProgramTailwind from "@dcasia/mini-program-tailwind-webpack-plugin/rollup";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [uni(), MiniProgramTailwind()],
  css: {
    postcss: {
      plugins: [require("tailwindcss"), require("autoprefixer")],
    },
  },
});
