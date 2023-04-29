import { navigateTo } from "#imports";

export default defineNuxtRouteMiddleware((to) => {
  const { $auth } = useNuxtApp();
  // @ts-ignore
  if ($auth && $auth.loggedIn) {
    return navigateTo("/");
  }
});
