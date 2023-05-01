<template>
  <div>
    <div class="tw-flex tw-items-center tw-justify-between">
      <v-btn icon size="small" @click="setlang(locale === 'ar' ? 'en' : 'ar')">
        {{ locale === "ar" ? "en" : "ar" }}
      </v-btn>
      <v-btn @click="toggleTheme" color="primary" icon size="small">
        <v-icon icon="mdi-theme-light-dark" />
      </v-btn>
    </div>
  </div>
</template>
<script setup lang="ts">
import useLangHandler from "~/composables/layout/useLangHandler";
import useThemeHandler from "~/composables/layout/useThemeHandler";
const { t, setlang, locale } = useLangHandler();
const { toggleTheme, setTheme } = useThemeHandler();
</script>
