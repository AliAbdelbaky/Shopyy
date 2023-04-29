<template>
  <div>
    <VApp>
      <VMain>
        <ToolBar />
        <slot />
      </VMain>
    </VApp>
  </div>
</template>
<script lang="ts" setup>
// @ts-ignore
import ToolBar from "~~/components/global/toolbar";
</script>
