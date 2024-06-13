import type { Store } from "@/types/store";
import { Method, http } from "@/utils/http";

const langId = 1;

export const getStoreByIdApi = (storeId: string) => {
  return http<Store>({
    method: Method.GET,
    url: `/store/${storeId}?langId=${langId}`,
  });
};

export const getStoreListApi = (store: Store) => {
  return http<Store[]>({
    method: Method.GET,
    url: `/store/list?langId=${langId}`,
    data: store,
  });
};
