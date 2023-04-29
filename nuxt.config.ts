import vuetify from "vite-plugin-vuetify";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      titleTemplate: "%s - Shoppy",
      title: "Shoppy",
      meta: [
        {
          charset: "utf-8",
        },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
        {
          hid: "description",
          name: "description",
          content: "",
        },
        {
          name: "format-detection",
          content: "telephone=no",
        },
      ],
    },
  },
  css: ["@/assets/css/main.css"],
  typescript: { shim: false },
  build: { transpile: ["vuetify"] },
  modules: [
    "@nuxtjs/tailwindcss",
    async (options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) =>
        // @ts-ignore
        config.plugins.push(vuetify())
      );
    },
  ],
  // modules: ["@nuxtjs/tailwindcss"],
  // build: {
  //   transpile: ["vuetify"],
  // },
  // vite: {
  //   define: {
  //     "process.env.DEBUG": false,
  //   },
  // },
});
