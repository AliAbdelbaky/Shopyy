import { useQuasar } from "quasar";

export default function () {
  const { dark } = useQuasar();

  const toggleTheme = () => {
    // 1 toggle theme for Quasar

    dark.set(!dark.isActive);
    console.log(dark);
    // 2 toggle theme for tailliwnd
    // console.log(document.body.classList);
    // document.body.classList.
    document
      .querySelector("body")
      ?.classList.remove(dark.isActive ? "light" : "dark");
    document
      .querySelector("body")
      ?.classList.add(dark.isActive ? "dark" : "light");
    // // 3 save theme data
    // localStorage.setItem("theme", themeIsDark ? "dark" : "light");
  };

  const setTheme = (globalTheme: "dark" | "light") => {
    dark.set(globalTheme === "dark");
    document
      .querySelector("body")
      ?.classList.remove(globalTheme == "dark" ? "light" : "dark");
    document.querySelector("body")?.classList.add(globalTheme);
  };

  return { toggleTheme, setTheme, dark };
}
