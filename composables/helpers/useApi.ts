import { useNuxtApp } from "#imports";
import axios, { AxiosResponse } from "axios";
const $axios = axios.create({
  headers: {
      Accept: "application/json, */*",
      "X-RESPONSE-CODE": "true",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "*",
      "Access-Control-Allow-Headers": "*",
      "X-Requested-With": "XMLHttpRequest",
  },
});
const $api = () => {
  const { locale } = useNuxtApp().$i18n.global;

  $axios.interceptors.request.use((config) => {
    console.log(
      `%c Making request to: ${config.url}`,
      "color: aliceblue; font-size: 12px;padding:10px;background-color:#000;border-radius:5px"
    );
    // Do something before request is sent
    config.headers["Accept-Language"] = locale.value;
    // console.log(config, "config from middleware");
    return config;
  });
  $axios.interceptors.response.use(
    function (response) {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      return response;
    },
    function (error) {
      const code = parseInt(error.response && error.response.status)
      console.trace('ERROR FROM AXIOS', code)
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      return Promise.reject(error);
    }
  );

  // BASE_URL
  $axios.defaults.baseURL = useRuntimeConfig().public.apiBase;

  return $axios;
};
export default $api;
