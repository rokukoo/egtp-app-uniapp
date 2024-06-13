import type { Product } from "@/types/product";
import { http } from "@/utils/http";

const langId = 1;

export const getProductListApi = (params: Product) => {
  return http<Product[]>({
    method: "GET",
    url: `/product/list?langId=${langId}`,
    data: params,
  });
};

export const getProductByIdApi = (productId: string) => {
  return http<Product>({
    method: "GET",
    url: `/product/getById/${productId}?langId=${langId}`,
  });
};
