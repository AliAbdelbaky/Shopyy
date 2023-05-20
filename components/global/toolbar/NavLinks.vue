<template>
  <div class="nav_links tw-py-0 tw-px-2">
    <nuxt-link
      v-for="(item, index) in links"
      class="link"
      :key="index"
      :to="item"
      >{{ item }}</nuxt-link
    >
    <q-btn
      v-if="loggedin"
      @click="signOut()"
      color="transparent"
      label="sign out"
      size="md"
      class="tw-opacity-50 tw-transition-all hover:tw-opacity-100 hover:tw-bg-slate-300 !tw-py-3 !tw-text-black"
    />
  </div>
</template>

<script setup lang="ts">
const links = ["auth", "dashboard"];

const { status, data, signIn, signOut } = useAuth();

const loggedin = computed(() => status.value === "authenticated");
</script>

<style scoped lang="scss">
.nav_links {
  @apply tw-flex tw-items-center tw-gap-2;
  .link {
    @apply tw-py-4 tw-px-2 tw-capitalize tw-relative;
    &::before {
      content: "";
      position: absolute;
      height: 2px;
      bottom: 0;
      left: 0;
      width: 100%;
      transform: scaleX(0);
      transform-origin: bottom right;
      background: var(--primary);
      transition: transform 0.25s ease-out;
    }
    &:hover {
      &::before {
        transform: scaleX(1);
        transform-origin: bottom left;
      }
      i {
        color: var(--primary);
      }
    }
    &.router-link-exact-active {
      &::before {
        transform: scaleX(1);
        transform-origin: bottom left;
      }
    }
    .router-link-exact-active {
      color: var(--primary) !important;
    }
    &:has(> .router-link-exact-active) {
      &::before {
        transform: scaleX(1);
        transform-origin: bottom left;
      }
    }
  }
}
</style>
