<template>
  <q-layout view="lHh Lpr lFf">
    <ToolBar />
    <q-page-container>
      <NuxtPage />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">

// @ts-ignore
import ToolBar from "~~/components/global/toolbar";
import { useQuasar } from "quasar";
const { loadingBar } = useQuasar();

loadingBar.setDefaults({
  color: "blue",
  size: "4px",
  position: "top",
});
</script>

<style scoped></style>
