<template>
  <v-card>
    {{ ProductData }}
  </v-card>
</template>

<script setup lang="ts">
import { SingleProduct } from "~/assets/types/product.type";

interface Props {
  ProductData: SingleProduct;
}
// @ts-ignore
const props = defineProps<Props>();
</script>

<style scoped></style>
