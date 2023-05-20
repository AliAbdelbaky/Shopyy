<template>
  <div>
    <h2 class="tw-text-8xl tw-uppercase tw-text-center tw-mb-7">Products</h2>
    <!-- <client-only> -->
    <template v-if="pending">
      <div
        class="tw-grid md:tw-grid-cols-2 lg:tw-grid-cols-4 lg:tw-justify-items-center tw-gap-2"
      >
        <q-card
          v-for="(_, index) in 12"
          :key="index"
          class="tw-flex tw-flex-col tw-gap-3 tw-w-full tw-py-3 tw-px-2"
          flat
        >
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

          <div
            class="tw-flex tw-items-center tw-justify-start tw-flex-1 tw-gap-2"
          >
            <q-skeleton type="QBtn" />
            <q-skeleton type="QBtn" />
          </div>
        </q-card>
      </div>
    </template>
    <template v-else-if="!pending && state.data.items.length > 0">
      <div
        class="tw-grid md:tw-grid-cols-2 lg:tw-grid-cols-4 lg:tw-justify-items-center tw-gap-2"
      >
        <q-intersection
          v-for="(item, index) in state.data.items"
          :key="index"
          once
          transition="jump-up"
          class="example-item tw-w-full !tw-h-full"
        >
          <ProductCard :productData="item" />
        </q-intersection>
      </div>
      <div class="tw-flex tw-items-center tw-justify-end tw-w-full tw-py-4">
        <q-pagination
          v-model="current"
          :max="maxPages"
          :max-pages="6"
          @update:modelValue="updatePagination"
          boundary-links
          icon-prev="mdi-chevron-left"
          iconFirst="mdi-chevron-double-left"
          iconLast="mdi-chevron-double-right"
        />
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
const current = ref(1);
const maxPages = ref(1);
const { state } = useProductHandler();

const { data, pending, error, refresh } = await useAsyncData(
  "products",
  async () => api(`products?limit=8&page=${current.value}`),
  {
    transform: (data) => {
      state.loading = true;
      return data.data;
    },
  }
);
watch(data, (products: any) => {
  current.value = products.paginationResult.page || 1;
  maxPages.value = products.paginationResult.numberOfPages;
  // @ts-ignore
  state.data.items = products.data;
  state.loading = false;
});
const router = useRouter();
const route = useRoute();
const updatePagination = (value: number) => {
  refresh();
  router.push({
    name: route.name || "index",
    query: { page: `${value}` },
  });
};
watch(route, (newRoute: any) => {
  const page = Number(newRoute.query.page);
  if (page > 0 && page !== current.value) {
    current.value = page;
    updatePagination(page);
  }
  // route.params
});
onMounted(() => {
  if (state.data.items.length === 0 && !pending.value) {
    refresh();
  }
});
</script>
