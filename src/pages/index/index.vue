<script setup lang="ts">
import CustomNavBar from "./components/custom-nav-bar.vue";
import MenuPanel from "./components/menu-panel.vue";
import ProductCard from "./components/product-card.vue";
import { useI18n } from "vue-i18n";
import { getHomeBannerApi } from "@/services/home";
import { onLoad } from "@dcloudio/uni-app";
import type { BannerItem } from "@/types/home";
import { ref, reactive } from "vue";
import TimeZonePanel from "./components/time-zone-panel.vue";
import ExchangeRatePanel from "./components/exchange-rate-panel.vue";
import EgtpStore from "./components/egtp-store.vue";

const { t } = useI18n();

// 获取屏幕边界到安全区域距离
const { safeAreaInsets } = uni.getSystemInfoSync();

const getHomeBannerData = async () => {
  const res = await getHomeBannerApi();
  console.log(res);
  bannerList.value = res.result;
};

const bannerList = ref<BannerItem[]>([]);

onLoad(() => {
  getHomeBannerData();
});

const state = reactive({
  tabValue: "0",
});
</script>

<style lang="scss"></style>

<template>
  <view>
    <!-- 顶部导航栏 -->
    <custom-nav-bar />
    <!-- 首页内容区 -->
    <scroll-view scroll-y>
      <view class="space-y-3">
        <!-- Banner区域 -->
        <view class="relative">
          <!-- 模拟 blend 效果 -->
          <view
            class="absolute h-1/2 w-full bg-gradient-to-b from-primary to-pink-100"
          />
          <view class="px-3">
            <egtp-swiper :list="bannerList" />
          </view>
        </view>
        <!-- 菜单区域 -->
        <view class="px-3">
          <menu-panel />
        </view>
        <!-- 功能交互区 -->
        <view class="px-3 flex justify-between gap-2 h-40">
          <time-zone-panel class="h-full flex-1" />
          <exchange-rate-panel class="h-full flex-1" />
        </view>
        <!-- 商品推荐区 -->
        <view class="px-3">
          <nut-tabs v-model="state.tabValue">
            <nut-tab-pane title="热卖商品">
              <product-card />
            </nut-tab-pane>
            <nut-tab-pane title="推荐商家">
              <egtp-store />
            </nut-tab-pane>
          </nut-tabs>
        </view>
      </view>
    </scroll-view>
  </view>
</template>

<style></style>
