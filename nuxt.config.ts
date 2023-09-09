// import vuetify from "vite-plugin-vuetify";
// import { HookResult } from "@nuxt/schema";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  app: {
    head: {
      titleTemplate: "%s",
      title: "9am agency",
      meta: [
        { charset: "utf-8" },
        {
          name: "viewport",
          content:
            "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover",
        },
        {
          hid: "description",
          name: "description",
          content: "9am agency. Video Production.",
        },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.svg" }],
    },
  },
  devtools: { enabled: true },
  css: ["~/assets/css/main.css", "vuetify/lib/styles/main.sass"],
  // build: {
  //   transpile: [/vue3-library-reproduction/, "vuetify"],
  // },
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
  },
  modules: [
    "@nuxt/content",
    // async (options, nuxt) => {
    //   nuxt.hooks.hook(
    //     "vite:extendConfig",
    //     (config) => config?.plugins?.push(vuetify()) as HookResult,
    //   );
    // },
    "@nuxtjs/device",
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
