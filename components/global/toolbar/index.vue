<template>
  <q-header flat>
    <BaseContainer class="tw-flex-1">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>Logo </q-toolbar-title>

        <userMenu />
        <cartMenu />
        <SettingsMenu />
      </q-toolbar>
    </BaseContainer>
  </q-header>

  <q-drawer v-model="leftDrawerOpen" bordered>
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
import BaseContainer from "../BaseContainer.vue";
const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>
