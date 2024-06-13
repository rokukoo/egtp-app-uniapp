import type { BannerItem } from "@/types/banner";
import { http } from "@/utils/http";

/**
 * 广告区域-小程序
 * @param distributionSite 广告区域展示位置（投放位置 投放位置，1为首页，2为分类商品页） 默认是1
 */
export const getBannerApi = (data: BannerItem) => {
  return http<BannerItem[]>({
    method: "GET",
    url: "/banner/list",
    data,
  });
};
