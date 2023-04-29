import { createVuetify, VuetifyOptions, ThemeDefinition } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { aliases, mdi } from "vuetify/iconsets/mdi";
import { ar, en } from "vuetify/locale";
const light: ThemeDefinition = {
  dark: false,
  colors: {
    background: "#FFFFFF",
    surface: "#FFFFFF",

    primary: "#0f141e",
    secondary: "#878a8f",

    accent: "#82b1ff",

    info: "#1491e6",
    warning: "#ffc107",
    error: "#e83a3a",
    success: "#4caf50",

    btn: "#220054",
    lightPrimary: "#57407a",
    midGray: "#6b7280",
    darkPrimary: "#1B2534",
    lightDark: "#383e43",
    subtitle: "#777E90",
    cardPrimary: "#FFFFFF",
    light: "#FFFFFF",
  },
};
const dark: ThemeDefinition = {
  dark: true,
  colors: {
    background: "#0c0c0c",
    surface: "#0c0c0c",

    primary: "#FFFFFF",
    secondary: "#e0e0e0",

    title: "#fff",
    cardPrimary: "#0c0c0c",
    light: "#0c0c0c",
  },
};
const messages = { ar, en };

const locale = {
  locale: "ar",
  fallback: "en",
  messages,
};
const theme = {
  defaultTheme: "light",
  themes: { light, dark },
};

const vuetifyOptions: VuetifyOptions = {
  ssr: true,
  components,
  directives,
  theme,
  locale,
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      mdi,
    },
  },
};
export default defineNuxtPlugin(({ vueApp }) => {
  vueApp.use(createVuetify(vuetifyOptions));
});
