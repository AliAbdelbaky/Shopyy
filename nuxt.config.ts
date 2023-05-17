// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    // Private keys are only available on the server
    apiSecret: "123",
    GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID,
    GITHUB_CLIENT_SECRET: process.env.GITHUB_CLIENT_SECRET,
    // origin: process.env.ORIGIN,
    AUTH_SECRET: process.env.AUTH_SECRET,
    // Public keys that are exposed to the client
    auth:{
      computed:{
        origin: process.env.ORIGIN
      }
    },
    public:{
      apiBase: process.env.BASE_URL || "/api",

    }
  },
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
  modules: [
    "nuxt-quasar-ui",
    "@pinia/nuxt",
    "@nuxtjs/tailwindcss",
    "@nuxt/devtools",
    "@sidebase/nuxt-auth",
  ],
  devtools: {
    // Enable devtools (default: true)
    enabled: true,
    // VS Code Server options
    vscode: {},
    // ...other options
  },
  quasar: {
    plugins: [
      "BottomSheet",
      "Dialog",
      "Loading",
      "LoadingBar",
      "Notify",
      "Dark",
    ],
    extras: {
      font: "roboto-font",
      fontIcons: ["mdi-v7"],
    },
    iconSet: "mdi-v7",
  },
  devServer: {
    port: 3000,
  },
  auth: {
    globalAppMiddleware: true,
    // origin: process.env.ORIGIN,
  },
});
