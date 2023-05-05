<template>
  <Hero />
  <BaseContainer>
    <Product />
  </BaseContainer>
</template>

<script setup lang="ts">
import Product from "./Product.vue";
import Hero from "./AHero.vue";
import BaseContainer from "~/components/global/BaseContainer.vue";
</script>

<style lang="scss" scoped></style>
