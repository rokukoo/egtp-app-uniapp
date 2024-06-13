<script setup lang="ts">
import CustomNavBar from "./components/custom-nav-bar.vue";
import MenuPanel from "./components/menu-panel.vue";
import ProductCard from "./components/product-list.vue";
import { useI18n } from "vue-i18n";
import { getBannerApi } from "@/services/banner";
import { onLoad } from "@dcloudio/uni-app";
import { ref, reactive } from "vue";
import TimeZonePanel from "./components/time-zone-panel.vue";
import ExchangeRatePanel from "./components/exchange-rate-panel.vue";
import EgtpStore from "./components/egtp-store.vue";

const { t } = useI18n();

// 获取屏幕边界到安全区域距离
const { safeAreaInsets } = uni.getSystemInfoSync();

const state = reactive({
  tabValue: "0",
});

const navigateToExhibition = () => {
  uni.navigateTo({
    url: "/pages/exhibition/exhibition",
  });
};
</script>

<style lang="scss"></style>

<template>
  <view>
    <!-- 顶部导航栏 -->
    <custom-nav-bar />
    <!-- 首页内容区 -->
    <!-- <scroll-view scroll-y> -->
    <view class="space-y-3">
      <!-- Banner区域 -->
      <view class="relative">
        <!-- 模拟 blend 效果 -->
        <view
          class="absolute h-1/3 w-full bg-gradient-to-b from-primary to-pink-100"
        />
        <view class="px-3 h-40">
          <!-- <egtp-swiper :list="bannerList" /> -->
          <egtp-banner :type="'index-1'" />
        </view>
      </view>
      <!-- 菜单区域 -->
      <view class="px-3">
        <menu-panel />
      </view>
      <!-- 功能交互区 -->
      <view class="px-3 flex justify-between gap-2 h-36">
        <time-zone-panel class="h-full flex-1" />
        <exchange-rate-panel class="h-full flex-1" />
      </view>
      <view class="px-3 h-32">
        <egtp-banner type="index-2" />
      </view>
      <view class="px-3 h-24 w-full justify-between flex gap-3">
        <view class="h-full flex-1">
          <egtp-banner type="index-3" />
        </view>
        <view class="h-full flex-1">
          <egtp-banner type="index-4" />
        </view>
      </view>
      <!-- 商品推荐区 -->
      <view class="px-3">
        <nut-tabs
          v-model="state.tabValue"
          :auto-height="true"
          :animated-time="0"
        >
          <nut-tab-pane
            title="热卖商品"
            pane-key="0"
            :custom-style="{ background: '#f6f6f6', padding: '10px 0' }"
          >
            <egtp-product-list :list="[]" />
          </nut-tab-pane>
          <nut-tab-pane
            title="推荐商家"
            pane-key="1"
            :custom-style="{ background: '#f6f6f6', padding: '10px 0' }"
          >
            <egtp-store-list :list="[]" />
          </nut-tab-pane>
        </nut-tabs>
      </view>
    </view>
    <!-- </scroll-view> -->
  </view>
</template>

<style></style>
@/services/banner
