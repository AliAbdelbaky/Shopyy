<template>
  <BaseContainer>
    <h2 class="tw-text-8xl tw-uppercase tw-text-center tw-mb-7">Products</h2>
    <template v-if="state.loading">
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
    <template v-else-if="!state.loading && state.data.items.length > 0">
      <div class="q-pa-md example-row-equal-width">
        <div class="row">
          <q-no-ssr>
            <q-intersection
              v-for="(item, index) in state.data.items"
              :key="index"
              once
              transition="scale"
              class="col-12 col-md-4 col-lg-3 tw-p-2"
            >
              <ProductCard :productData="item" />
            </q-intersection>
          </q-no-ssr>
        </div>
      </div>
    </template>
    <template v-else>
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
      "products?limit=10&page=2"
    );
    if (data && data.data.length) {
      state.data.items = data.data;
    }
    state.loading = false;
  } catch (err) {
    console.log(err);
    state.loading = false;
  }
};
const { state } = useProductHandler();

onBeforeMount(() => {
  fetchData();
});
</script>
