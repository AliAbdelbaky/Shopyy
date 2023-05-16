<template>
  <MainComp />
</template>

<script setup lang="ts">
// @ts-ignore
import MainComp from "~~/components/auth/index.vue";
definePageMeta({
  layout: "auth",
  middleware: "authentication",
});
</script>

<style scoped></style>
