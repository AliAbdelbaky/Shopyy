<template>
  <div>
    <div class="tw-flex tw-items-center tw-gap-3 tw-justify-between">
      <q-btn
        @click="setlang(locale === 'ar' ? 'en' : 'ar')"
        flat
        dense
        aria-label="language"
        round
      >
        {{ locale === "ar" ? "en" : "ar" }}</q-btn
      >
      <q-btn
        @click="toggleTheme"
        flat
        dense
        aria-label="Theme"
        round
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
</script>
