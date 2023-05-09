export interface ApiResponse<T> {
  data: T | null;
  error: any;
}

export interface Api {
  fetch(endPoint: string): Promise<ApiResponse<any[]>>;
}
interface Headers {
  Authorization?: null | string;
  Accept: string;
  "Content-Type": string;
  "X-RESPONSE-CODE": string;
  "Access-Control-Allow-Origin": string;
  "Access-Control-Allow-Methods": string;
  "Access-Control-Allow-Headers": string;
  "X-Requested-With": string;
  "Accept-Language"?: string;
}

export default function (): Api {
  const baseURL = computed(() => useRuntimeConfig().public.apiBase);
  const locale = computed(() => useNuxtApp().$i18n.global.locale.value);

  // console.log(useNuxtApp().$i18n.global.locale.value);

  const token = true;

  const headers: Headers = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
    Accept: "application/json, */*",
    "X-RESPONSE-CODE": "true",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "*",
    "Access-Control-Allow-Headers": "*",
    "X-Requested-With": "XMLHttpRequest",
  };

  // console.log(useNuxtApp().$i18n.global.locale.value);

  headers["Accept-Language"] = locale.value;

  token ? (headers.Authorization = `${token}`) : (headers.Authorization = null);

  const fetch = async (endPoint: string): Promise<ApiResponse<any[]>> => {
    try {
      const response = await $fetch(`${baseURL.value}/${endPoint}`, {
        headers,
      });
      return { data: response, error: null };
    } catch (e) {
      console.error(e);
      return { data: null, error: e };
    }
  };

  return { fetch };
}
