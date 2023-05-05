<template>
  <q-btn flat dense @click="clickHandler">
    <div class="tw-relative tw-text-black">
      <q-avatar
        size="md"
        class="tw-bg-slate-200 tw-flex tw-items-center"
      >
        <q-icon
          v-if="!auth.user"
          name="mdi-account"
          size="25px"
          class="tw-text-[#212121]"
        />
        <img v-else :src="auth.img" class="tw-object-cover" />
      </q-avatar>
      <div
        class="tw-absolute tw-bottom-[-2px] tw-right-[-3px] tw-rounded-full tw-bg-white tw-flex tw-items-center tw-justify-center tw-py-[1px] tw-px-[2px] tw-shadow-2xl tw-w-fit"
        style="box-shadow: 0px 0px 0px 1px #00000025; height: 16px"
      >
        <q-icon
          :name="screenIsSM ? 'mdi-menu' : 'mdi-chevron-down'"
          size="12px"
          class="tw-text-black tw-w-full"
        />
      </div>
    </div>

    <template v-if="!screenIsSM">
      <q-menu transition-show="jump-down" transition-hide="jump-up">
        <div class="row no-wrap q-pa-md">
          <div class="column">
            <div class="text-h6 q-mb-md">Settings</div>
            <q-toggle v-model="mobileData" label="Use Mobile Data" />
            <q-toggle v-model="bluetooth" label="Bluetooth" />
          </div>

          <q-separator vertical inset class="q-mx-lg" />

          <div class="column items-center">
            <q-avatar size="72px">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
            </q-avatar>

            <div class="text-subtitle1 q-mt-md q-mb-xs">John Doe</div>

            <q-btn
              color="primary"
              label="Logout"
              push
              size="sm"
              v-close-popup
            />
          </div>
        </div>
      </q-menu>
    </template>
  </q-btn>
</template>

<script setup lang="ts">
const auth = ref({
  user: false,
  img: "https://cdn.quasar.dev/img/avatar.png",
});
const screenIsSM = ref(true);

const mobileData = ref(true);
const bluetooth = ref(true);
import useToolbar from "~/composables/website/shared/useToolbar";
const { toggleDrawer } = useToolbar();
const clickHandler = (): void => {
  if (screenIsSM.value) {
    toggleDrawer();
  }
};
</script>

<style lang="scss" scoped></style>
