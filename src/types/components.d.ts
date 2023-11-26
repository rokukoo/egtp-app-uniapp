import EgtpSwiper from "@/components/egtp-swiper.vue";

declare module "vue" {
  export interface GlobalComponents {
    EgtpSwiper: typeof EgtpSwiper;
  }
}
