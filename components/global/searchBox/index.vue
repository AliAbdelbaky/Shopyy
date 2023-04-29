<template>
  <v-text-field
    :loading="loading"
    density="compact"
    variant="solo"
    label="Search templates"
    append-inner-icon="mdi-magnify"
    single-line
    hide-details
    @click:append-inner="onClick"
  ></v-text-field>
</template>

<script setup lang="ts">
const loaded = ref(false);
const loading = ref(false);
const onClick = () => {
  loading.value = true;

  setTimeout(() => {
    loading.value = false;
    loaded.value = true;
  }, 2000);
};
</script>

<style lang="scss" scoped></style>
