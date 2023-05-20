export default defineNuxtRouteMiddleware(async (to) => {
  const { status, getSession } = useAuth();
  // Return immediately if user is already authenticated

  // const data = await getSession();
  if (
    to.meta &&
    to.meta.layout === "dashboard" &&
    status.value !== "authenticated"
  ) {
    return navigateTo("/");
  }
  if (
    to.meta &&
    to.meta.layout === "auth" &&
    status.value === "authenticated"
  ) {
    return navigateTo("/");
  }
});
