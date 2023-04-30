import { useNuxtApp } from "#imports";
import axios, { AxiosResponse } from "axios";
// import useToast from "~/composables/helpers/useToast";
import { Data } from "~/assets/types/product.type";
import { get, omit } from "lodash";

const $axios = axios.create({
  // baseURL: useRuntimeConfig().public.base_url,
  headers: {
    Accept: "application/json, */*",
    "X-RESPONSE-CODE": "true",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "*",
    "Access-Control-Allow-Headers": "*",
    "X-Requested-With": "XMLHttpRequest",
  },
});

const useRequest = (silence = false) => {
  $axios.defaults.baseURL = useRuntimeConfig().public.apiBase;
  const { $auth, callHook } = useNuxtApp();
  // @ts-ignore
  if ($auth) {
    $axios.defaults.headers.Authorization = "Bearer " + $auth.user?.token;
  }
  // @ts-ignore
  $axios.defaults.headers["Accept-Language"] =
    localStorage.getItem("lang") || "en";
  return {
    async safeFetch<T>(
      endpoint: string | IGetParam,
      defaultValue: T
    ): Promise<T | null> {
      const { status, data } = await this.get(endpoint);
      if (!status) {
        return defaultValue;
      }
      return data.data;
    },
    post(url: any, data: Data = {}, options: Data = {}): Promise<IResponse> {
      return this.pure("post", url, { data, ...options });
    },
    get(endpoint: string | IGetParam, header: Data = {}): Promise<IResponse> {
      const url = typeof endpoint === "string" ? endpoint : endpoint.url;
      const params = typeof endpoint === "string" ? {} : endpoint.params || {};
      return this.pure("get", url, { header, data: params });
    },
    delete(url: any, data: Data = {}, options: Data = {}): Promise<IResponse> {
      data._method = "delete";
      return this.pure("post", url, { data, ...options });
    },
    put(url: any, data: Data = {}, options: Data = {}): Promise<IResponse> {
      return this.pure("put", url, { data, ...options });
    },
    patch(url: any, data: Data = {}, options: Data = {}): Promise<IResponse> {
      data._method = "patch";
      return this.pure("post", url, { data, ...options });
    },
    async pure(method: any, url: any, options: Data = {}): Promise<IResponse> {
      return new Promise((resolve) => {
        callHook("page:start");

        buildRequest(method, url, options)
          .then((response: any) => {
            resolve({
              status: true,
              code: response.code,
              data: response.data,
            });
          })
          .catch(async (error) => {
            let result = {
              message: get(
                error,
                "response.data.message",
                "Unexpected Error Occurred"
              ),
              errors: [],
            };
            if (error.response && error.response.status === 401) {
              console.log("here");
              // @ts-ignore
              return await useNuxtApp().$auth.logout();
              // return useAuthStore().logout()
            }
            if (error.response && error.response.status === 422) {
              result = error.response.data;
              // !silence && useToast(result.message, "warning");
              !silence && console.log(result.message, "warning");
            } else {
              console.log(error.response);
              !silence &&
                console.log(
                  result.message || "Couldn't execute your request.",
                  "error"
                );
              // !silence &&
              //   useToast(
              //     result.message || "Couldn't execute your request.",
              //     "error"
              //   );
            }

            return resolve({
              status: false,
              code: error.response.status,
              data: result,
            });
          })
          .finally(() => {
            callHook("page:finish");
          });
      });
    },
  };
};

function buildRequest(
  method: any,
  url: any,
  options: Data = {}
): Promise<AxiosResponse> {
  const config = omit(options, ["data", "header"]);
  let request: Object = {
    get() {
      return $axios.get(url, {
        params: options.data,
        headers: {
          ...options.header,
        },
        ...config,
      });
    },
  };
  if (!request.hasOwnProperty(method)) {
    return $axios[method](url, options.data, {
      header: options.header,
      ...config,
    });
  }
  return request[method]();
}

export default useRequest;

export interface IResponse {
  data: any;
  code: number;
  status: boolean;
}

interface IGetParam {
  url: string;
  params: Record<any, any>;
}
