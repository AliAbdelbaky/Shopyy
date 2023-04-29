<template>
  <div>
    <h2 class="tw-text-primary">hii</h2>
    <div class="tw-flex tw-items-center tw-justify-between">
      <v-btn @click="setlang(locale === 'ar' ? 'en' : 'ar')">
        {{ t("hello") }}
      </v-btn>
      <v-btn @click="toggleTheme" color="primary">
        {{ theme.name }}
      </v-btn>
    </div>
  </div>
</template>
<script setup lang="ts">
import useLangHandler from "~/composables/layout/useLangHandler";
import useThemeHandler from "~/composables/layout/useThemeHandler";
const { t, setlang, locale } = useLangHandler();
const { theme, toggleTheme, setTheme } = useThemeHandler();
</script>
