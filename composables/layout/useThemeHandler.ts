import { useQuasar } from "quasar";

export default function () {
  const { dark } = useQuasar();
  const theme_cookie = useCookie("theme");

  const setTheme = (globalTheme: "dark" | "light") => {
    dark.set(globalTheme === "dark");
    theme_cookie.value = globalTheme;
    if (process.client) {
      document
        .querySelector("body")
        ?.classList.remove(globalTheme == "dark" ? "light" : "dark");
      document.querySelector("body")?.classList.add(globalTheme);
    }
  };

  return { setTheme, dark, theme_cookie };
}
