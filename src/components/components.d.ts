import EgtpSwiper from "./egtp-swiper.vue";
import EgtpCard from "./egtp-card.vue";
import EgtpLogisticsList from "./egtp-logistics-list.vue";
import EgtpProductList from "./egtp-product-list.vue";
import EgtpStoreList from "./egtp-store-list.vue";
import EgtpBanner from "./egtp-banner.vue";

declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    EgtpSwiper: typeof EgtpSwiper;
    EgtpCard: typeof EgtpCard;
    EgtpLogisticsList: typeof EgtpLogisticsList;
    EgtpBanner: typeof EgtpBanner;
    EgtpProductList: typeof EgtpProductList;
    EgtpStoreList: typeof EgtpStoreList;
  }
}
