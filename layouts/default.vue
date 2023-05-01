<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> Quasar App </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
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

    <q-page-container>
      <NuxtPage />
    </q-page-container>
  </q-layout>
</template>
<script lang="ts" setup>
// @ts-ignore
import ToolBar from "~~/components/global/toolbar";
const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>
