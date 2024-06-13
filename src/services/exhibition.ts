import type { Exhibition } from "@/types/exhibition";
import { http, type PageResult } from "@/utils/http";

const langId = 1;

/**
 * 首页-广告区域-小程序
 * @param store 广告区域展示位置（投放位置 投放位置，1为首页，2为分类商品页） 默认是1
 */
export const getExhibitionListApi = (e: Exhibition | {} = {}) => {
  return http<Exhibition[]>({
    method: "GET",
    url: `/exhibition/list?langId=${langId}`,
    data: e,
  });
};
