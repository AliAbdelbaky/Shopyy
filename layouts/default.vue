<template>
  <q-layout view="lHh Lpr lFf">
    <ToolBar />
    <q-page-container>
      <NuxtPage />
    </q-page-container>
  </q-layout>
</template>
<script lang="ts" setup>
// @ts-ignore
import ToolBar from "~~/components/global/toolbar";
</script>
