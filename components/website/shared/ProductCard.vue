<template>
  <q-card class="tw-h-full" flat>
    <q-img src="https://cdn.quasar.dev/img/chicken-salad.jpg" />

    <q-card-section>
      <q-btn
        fab
        color="primary"
        icon="mdi-map-marker"
        class="absolute"
        style="top: 0; right: 12px; transform: translateY(-50%)"
      />

      <div class="row no-wrap items-center">
        <div class="col text-h6 ellipsis">
          {{ productData.title }}
        </div>
        <div
          class="col-auto text-grey text-caption q-pt-md row no-wrap items-center"
        >
          <q-icon name="mdi-map-marker" />
          {{ productData.sold }}
        </div>
      </div>

      <q-rating v-model="productData.ratingAvarage" :max="5" size="32px" />
    </q-card-section>

    <q-card-section class="q-pt-none">
      <div class="text-subtitle1">{{ productData.slug }}</div>
      <div class="text-caption text-grey">
        {{ productData.description }}
      </div>
    </q-card-section>

    <q-separator />

    <q-card-actions>
      <q-btn flat round icon="mdi-calendar" />
      <q-btn flat color="primary"> Reserve </q-btn>
    </q-card-actions>
  </q-card>
</template>

<script setup lang="ts">
import { ISingleProduct } from "~/assets/types/product.type";

interface Props {
  productData: ISingleProduct;
}
// @ts-ignore
const props = defineProps<Props>();
</script>

<style scoped></style>
