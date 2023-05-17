export interface ApiResponse<T> {
  data: T | null;
  error: any;
}

type Headers = [string, string][] | Record<string, string>;

export default async function (endPoint: string): Promise<ApiResponse<any[]>> {
  const baseURL = computed(() => useRuntimeConfig().apiBase);
  const langCookie = useCookie("lang").value as "ar" | "en";
  console.log({ langCookie });

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
    "Accept-Language": langCookie || "en",
  };

  token ? (headers.Authorization = `${token}`) : (headers.Authorization = "");
  try {
    const URL = `${baseURL.value}/${endPoint}`;

    console.log(
      `%c Making request to: ${endPoint}`,
      "color: aliceblue; font-size: 12px;padding:10px;background-color:#000;border-radius:5px"
    );
    const response = await $fetch(URL, {
      headers,
    });
    return { data: response as any, error: null };
  } catch (e) {
    console.trace(e);
    return { data: null, error: e };
  }
}
