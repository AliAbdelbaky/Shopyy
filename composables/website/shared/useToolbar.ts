const drawer = ref(false);
export default function () {
  const toggleDrawer  = ()=>{
    drawer.value = !drawer.value;
  }
  return {
    drawer,
    toggleDrawer
  };
}
