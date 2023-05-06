<template>
  <div
    class="tw-min-h-[96vh] tw-flex tw-items-center tw-justify-center tw-relative"
  >
    <AForm class="tw-relative tw-z-10" />
    <img
      :src="authImgs"
      class="tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full tw-object-cover tw-pointer-events-none"
    />
  </div>
</template>

<script setup lang="ts">
import AForm from "./AForm.vue";
// @ts-ignore
import authImgs from "~~/assets/imgs/auth.webp";
</script>

<style scoped></style>
