<template>
  <div>
    <VApp>
      <VMain>
        <slot />
        <v-btn @click="setlang(locale === 'ar' ? 'en' : 'ar')">
          {{ t("hello") }}
        </v-btn>
      </VMain>
    </VApp>
  </div>
</template>

<script setup lang="ts">
import useLangHandler from "~/composables/layout/useLangHandler";
const { t, setlang, locale } = useLangHandler();
</script>

<style lang="scss" scoped></style>
