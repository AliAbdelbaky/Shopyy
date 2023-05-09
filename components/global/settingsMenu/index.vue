<template>
  <div>
    <div class="tw-flex tw-items-center tw-gap-1 tw-justify-between">
      <q-btn
        @click="setTheme(dark.isActive ? 'light' : 'dark')"
        flat
        dense
        aria-label="Theme"
        icon="mdi-magnify"
      />
      <q-btn
        @click="setlang(locale === 'ar' ? 'en' : 'ar')"
        flat
        dense
        aria-label="language"
      >
        {{ langCookie == "ar" ? "en" : "ar" }}</q-btn
      >
      <q-btn
        @click="setTheme(dark.isActive ? 'light' : 'dark')"
        flat
        dense
        aria-label="Theme"
        icon="mdi-theme-light-dark"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import useLangHandler from "~/composables/layout/useLangHandler";
import useThemeHandler from "~/composables/layout/useThemeHandler";
const { t, setlang, locale, langCookie } = useLangHandler();
const { setTheme, dark, theme_cookie } = useThemeHandler();

const locales = (langCookie.value as "ar" | "en") || "en";
const theme = (theme_cookie.value as "dark" | "light") || "light";
setlang(locales);
setTheme(theme);
</script>
