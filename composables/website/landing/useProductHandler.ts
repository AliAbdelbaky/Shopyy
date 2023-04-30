import { ISingleProduct } from "~/assets/types/product.type";
interface State {
  loading: boolean;
  loadingNext: boolean;
  data: {
    items: ISingleProduct[];
    adds: any;
  };
}

export default function () {
  const state = reactive<State>({
    loading: true,
    loadingNext: false,
    data: {
      items: [],
      adds: null,
    },
  });

  return {
    state,
  };
}


