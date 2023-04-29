import { useI18n } from "vue-i18n";
export default function () {
  const refreshing = ref(false);
  const { locale, t } = useI18n({ useScope: "global" });
  const setlang = (lang: "ar" | "en") => {
    const refreshAll = async () => {
      refreshing.value = true;
      try {
        await refreshNuxtData();
      } finally {
        refreshing.value = false;
      }
    };
    locale.value = lang;
    // current.value = lang;
    // isRtl.value = lang == "ar" ? true : false;
    localStorage.setItem("lang", lang);
    if (typeof document !== "undefined") {
      document.querySelector("html")?.setAttribute("lang", lang);
      document.querySelector("body")?.setAttribute("lang", lang);
      document
        .querySelector("body")
        ?.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
      document
        .querySelector("html")
        ?.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
    }
    refreshAll();
  };
  return { locale, setlang, t };
}
