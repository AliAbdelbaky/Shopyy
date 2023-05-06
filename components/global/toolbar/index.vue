<template>
  <q-header
    flat
    class="tw-text-black"
    :class="isAuthroute ? ' !tw-bg-transparent' : 'tw-bg-white '"
  >
    <BaseContainer
      class="tw-flex-1 !tw-py-0"
      :class="isAuthroute ? 'md:!tw-px-[20%]' : ''"
    >
      <q-toolbar>
        <q-toolbar-title>Logo </q-toolbar-title>
        <template v-if="!isAuthroute">
          <NavLinks class="tw-me-2" />
          <SettingsMenu />
          <cartMenu />
          <userMenu class="tw-mx-3" />
        </template>
      </q-toolbar>
    </BaseContainer>
  </q-header>

  <q-drawer v-model="drawer" bordered>
    <q-list>
      <q-item-label header> Essential Links </q-item-label>
      <q-item
        clickable
        tag="a"
        target="_blank"
        v-for="(item, index) in 10"
        :key="index"
      >
        <q-item-section avatar>
          <q-icon :name="'school'" />
        </q-item-section>

        <q-item-section>
          <q-item-label>github.com/quasarframework</q-item-label>
          <q-item-label caption> chat.quasar.dev </q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-drawer>
</template>
<script setup lang="ts">
// @ts-ignore
import SearchBox from "~/components/global/searchBox";
// @ts-ignore
import UserMenu from "~/components/global/userMenu";
// @ts-ignore
import CartMenu from "~/components/global/cartMenu";
// @ts-ignore
import SettingsMenu from "~/components/global/settingsMenu";
// @ts-ignore
import NavLinks from "./NavLinks.vue";
import BaseContainer from "../BaseContainer.vue";
const leftDrawerOpen = ref(false);
import useToolbar from "~/composables/website/shared/useToolbar";
const { drawer } = useToolbar();

const route = useRoute();
const isAuthroute = computed(() => {
  return route.name === "auth";
});
</script>
