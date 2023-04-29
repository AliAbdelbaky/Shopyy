<template>
  <NuxtLayout>
    <NuxtPage
      :transition="{
        css: false,
        onBeforeEnter: beforeEnter,
        onEnter: enter,
        onLeave: leave,
      }"
    />
  </NuxtLayout>
</template>

<script setup>
const { $gsap } = useNuxtApp();
const beforeEnter = (el) => {
  $gsap.set(el, {
    opacity: 0,
    yPercent: 3,
  });
};
const enter = (el, done) => {
  $gsap.to(el, {
    opacity: 1,
    duration: 0.5,
    yPercent: 0,
    ease: "power2.inOut",
    onComplete: done,
  });
};
const leave = (el, done) => {
  $gsap.to(el, {
    opacity: 0,
    duration: 0.5,
    yPercent: -3,
    ease: "power2.inOut",
    onComplete: done,
  });
};
</script>
