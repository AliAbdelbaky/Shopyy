<template>
  <BaseContainer>
    <h2 class="tw-text-8xl tw-uppercase tw-text-center tw-mb-7">Products</h2>
    <template v-if="state.loading">
      <v-row>
        <v-col cols="12" md="3" v-for="(_, index) in 16" :key="index">
          <h2>loading</h2>
        </v-col>
      </v-row>
    </template>
    <template v-else-if="!state.loading && state.data.items.length > 0">
      <v-row>
        <v-col
          cols="12"
          md="3"
          v-for="(item, index) in state.data.items"
          :key="index"
        >
          <ProductCard :productData="item" />
        </v-col>
      </v-row>
    </template>
    <template v-else>
      <h2>Error</h2>
    </template>
    <template v-if="state.loadingNext">
      <v-row>
        <v-col cols="12" md="3" v-for="(_, index) in 8" :key="index">
          <h2>Loading Next!</h2>
        </v-col>
      </v-row>
    </template>
  </BaseContainer>
</template>

<script setup lang="ts">
// @ts-ignore
import { onBeforeMount } from "vue";
import BaseContainer from "~/components/global/BaseContainer.vue";
// @ts-ignore
import ProductCard from "~/components/website/shared/ProductCard.vue";
import useRequest from "~/composables/helpers/useApi";
import useProductHandler from "~/composables/website/landing/useProductHandler";

const fetchData = async () => {
  state.loading = true;
  try {
    const { status, data, code } = await useRequest(true).get(
      "products?limit=10"
    );
    state.data.items = data.data;
    state.loading = false;
  } catch (err) {
    console.log(err);
    state.loading = false;
  }

  // console.log(data, status, code, "sdsdsds");
};
const { state } = useProductHandler();

onBeforeMount(() => {
  fetchData();
});
</script>
