<template>
  <v-card :title="productData.title">
    {{ productData.desc }}
  </v-card>
</template>

<script setup lang="ts">
import { SingleProduct } from "~/assets/types/product.type";

interface Props {
  productData: SingleProduct;
}
// @ts-ignore
const props = defineProps<Props>();
</script>

<style scoped></style>
