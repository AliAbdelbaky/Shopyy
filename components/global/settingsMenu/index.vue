<template>
  <div>
    <div class="tw-flex tw-items-center tw-gap-1 tw-justify-between">
      <q-btn
        @click="toggleTheme"
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
        {{ locale === "ar" ? "en" : "ar" }}</q-btn
      >
      <q-btn
        @click="toggleTheme"
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
const { t, setlang, locale } = useLangHandler();
const { toggleTheme, setTheme } = useThemeHandler();

if (process.client) {
  const locale = (localStorage.getItem("lang") as "ar" | "en") || "en";
  const theme = (localStorage.getItem("theme") as "dark" | "light") || "light";
  setlang(locale);
  setTheme(theme);
}
</script>
