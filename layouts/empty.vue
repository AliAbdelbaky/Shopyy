<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <NuxtPage />
      <q-btn
        v-if="!loggedin"
        @click="signIn('github')"
        color="transparent"
        label="sign in"
        size="md"
        class="tw-opacity-50 tw-transition-all hover:tw-opacity-100 hover:tw-bg-slate-300 !tw-py-3 !tw-text-black"
      />
      <q-btn
        v-else
        @click="signOut()"
        color="transparent"
        label="sign out"
        size="md"
        class="tw-opacity-50 tw-transition-all hover:tw-opacity-100 hover:tw-bg-slate-300 !tw-py-3 !tw-text-black"
      />
    </q-page-container>
  </q-layout>
</template>
<script lang="ts" setup>
import { useQuasar } from "quasar";
const { loadingBar } = useQuasar();

loadingBar.setDefaults({
  color: "blue",
  size: "4px",
  position: "top",
});
const { status, data, signIn, signOut } = useAuth();

const loggedin = computed(() => status.value === "authenticated");
</script>
