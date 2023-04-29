<template>
  <v-toolbar density="compact">
    <v-toolbar-title>Logo</v-toolbar-title>
    <SearchBox />
    <!-- <v-spacer></v-spacer> -->

    <UserMenu />
    <div class="cart">
      <v-icon icon="mdi-shopping-outline"></v-icon>
    </div>
  </v-toolbar>
</template>
<script setup lang="ts">
// @ts-ignore
import SearchBox from "~/components/global/searchBox";
// @ts-ignore
import UserMenu from "~/components/global/userMenu";
</script>
