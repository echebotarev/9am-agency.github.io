import vuetify from "vite-plugin-vuetify";
import { HookResult } from "@nuxt/schema";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  css: ["~/assets/css/main.css", "vuetify/lib/styles/main.sass"],
  build: {
    transpile: ["vuetify"],
  },
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
  },
  modules: [
    "@nuxt/content",
    async (options, nuxt) => {
      nuxt.hooks.hook(
        "vite:extendConfig",
        (config) => config?.plugins?.push(vuetify()) as HookResult,
      );
    },
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
