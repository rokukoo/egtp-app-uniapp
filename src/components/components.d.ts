import EgtpSwiper from "./egtp-swiper.vue";
import EgtpCard from "./egtp-card.vue";

declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    EgtpSwiper: typeof EgtpSwiper;
    EgtpCard: typeof EgtpCard;
  }
}
