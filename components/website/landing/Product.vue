<template>
  <div>
    <h2 class="tw-text-8xl tw-uppercase tw-text-center tw-mb-7">Products</h2>
    <!-- <client-only> -->
    <template v-if="pending">
      <div class="q-pa-md example-row-equal-width">
        <div class="row">
          <div
            class="col-12 col-md-4 col-lg-3 tw-p-2"
            v-for="(_, index) in 16"
            :key="index"
          >
            <q-card style="max-width: 300px">
              <q-item>
                <q-item-section avatar>
                  <q-skeleton type="QAvatar" />
                </q-item-section>

                <q-item-section>
                  <q-item-label>
                    <q-skeleton type="text" />
                  </q-item-label>
                  <q-item-label caption>
                    <q-skeleton type="text" />
                  </q-item-label>
                </q-item-section>
              </q-item>

              <q-skeleton height="200px" square />

              <q-card-actions align="right" class="q-gutter-md">
                <q-skeleton type="QBtn" />
                <q-skeleton type="QBtn" />
              </q-card-actions>
            </q-card>
          </div>
        </div>
      </div>
    </template>
    <template v-else-if="!pending && state.data.items.length > 0">
      <div class="q-pa-md example-row-equal-width">
        <div class="row tw-px-0">
          <q-intersection
            v-for="(item, index) in state.data.items"
            :key="index"
            once
            transition="jump-up"
            class="example-item col-12 col-md-4 col-lg-3"
          >
            <ProductCard :productData="item" />
          </q-intersection>
        </div>
      </div>
    </template>
    <template v-if="error">
      <h2>Error</h2>
    </template>
    <template v-if="state.loadingNext">
      <div class="q-pa-md example-row-equal-width">
        <div class="row">
          <div
            class="col-12 col-md-4 col-lg-3 tw-p-2"
            v-for="(_, index) in 8"
            :key="index"
          >
            <q-card class="!tw-w-full" style="max-width: 100%">
              <q-item>
                <q-item-section avatar>
                  <q-skeleton type="QAvatar" />
                </q-item-section>

                <q-item-section>
                  <q-item-label>
                    <q-skeleton type="text" />
                  </q-item-label>
                  <q-item-label caption>
                    <q-skeleton type="text" />
                  </q-item-label>
                </q-item-section>
              </q-item>

              <q-skeleton height="200px" square />

              <q-card-actions align="right" class="q-gutter-md">
                <q-skeleton type="QBtn" />
                <q-skeleton type="QBtn" />
              </q-card-actions>
            </q-card>
          </div>
        </div>
      </div>
    </template>
    <!-- </client-only> -->
  </div>
</template>

<script setup lang="ts">
// @ts-ignore
import ProductCard from "~/components/website/shared/ProductCard.vue";
import useProductHandler from "~/composables/website/landing/useProductHandler";
import api from "~/composables/helpers/useApiHandler";

const { state } = useProductHandler();

const { data, pending, error } = await useAsyncData(
  "products",
  async () => api("products?limit=20&page=1"),
  {
    transform: (data) => {
      state.loading = true;
      return data.data;
    },
  }
);
watch(data, (products: any) => {
  // @ts-ignore
  state.data.items = products.data;
  state.loading = false;
});
</script>
