<template>
  <v-toolbar density="compact">
    <BaseContainer class="tw-flex-1">
      <div class="tw-flex tw-items-center tw-gap-2 tw-flex-1">
        <div class="logo">logo</div>
        <SearchBox class="tw-flex-1 tw-w-full" />
        <userMenu />
        <cartMenu />
        <SettingsMenu />
      </div>
    </BaseContainer>
  </v-toolbar>
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
</script>
