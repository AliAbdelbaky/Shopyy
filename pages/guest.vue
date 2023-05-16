<template>
  <div>
    <h2>hii im GUEST ONLY</h2>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "empty",
  auth: { unauthenticatedOnly: false, navigateAuthenticatedTo: "/protected" },
});
</script>

<style lang="scss" scoped></style>
