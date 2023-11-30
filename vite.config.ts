import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";
import MiniProgramTailwind from "@dcasia/mini-program-tailwind-webpack-plugin/rollup";
import { NutResolver } from "nutui-uniapp";
import Components from "@uni-helper/vite-plugin-uni-components";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Components({
      resolvers: [NutResolver()],
    }),
    MiniProgramTailwind(),
    uni(),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData:
          "@import '@/scss/nut-ui.cusom.scss';@import 'nutui-uniapp/styles/variables.scss';",
      },
    },
    postcss: {
      plugins: [require("tailwindcss"), require("autoprefixer")],
    },
  },
});
