import { defineNuxtPlugin } from "#imports";
import { createI18n } from "vue-i18n";
import ar from "~/i18n/ar.json";
import en from "~/i18n/en.json";

export default defineNuxtPlugin((nuxtApp) => {
  const i18n = createI18n({
    missingWarn: true,
    availableLocales: ["ar", "en"],
    legacy: false,
    globalInjection: true,
    locale: "en",
    fallbackLocale: false,
    messages: {
      ar,
      en,
    },
  });

  nuxtApp.vueApp.use(i18n);
});
