<template>
  <view class="">
    <custom-nav-bar />
    <!-- 模拟 blend 效果 -->
    <view class="h-28 bg-primary" />
    <view
      class="absolute w-full h-24 bg-gradient-to-b from-primary to-pink-white"
    />
    <banner />
    <menu-panel />
    <view class="flex">
      <uni-card
        title="时区信息"
        @click=""
        class="bg-gradient-to-br from-blue-50 to-slate-100 !mr-0 !p-0 !mb-0"
      >
        <template v-slot:extra>
          <text class="text-gray-500 text-xs">切换</text>
          <text class="text-gray-300 text-xs">丨</text>
          <text class="text-gray-500 text-xs">刷新</text>
        </template>
        <view class="flex items-center justify-between">
          <view class="flex flex-col items-center">
            <text class="text-lg font-bold">15:55</text>
            <text>塔吉克斯坦</text>
          </view>
          <view class="flex flex-col items-center">
            <text class="text-lg font-bold">18:55</text>
            <text>中国</text>
          </view>
        </view>
      </uni-card>
      <uni-card
        title="实时汇率"
        @click=""
        class="bg-gradient-to-b from-blue-50 to-slate-100 !p-0 !mb-0"
      >
        <template v-slot:extra>
          <text class="text-gray-500 text-xs">切换</text>
          <text class="text-gray-300 text-xs">丨</text>
          <text class="text-gray-500 text-xs">刷新</text>
        </template>
        <view class="h-full flex flex-col justify-between">
          <view class="flex w-full justify-between">
            <text>1.00 USD</text>
            <text> = </text>
            <text>7.05 RMB</text>
          </view>
          <view class="flex w-full justify-between">
            <text>1.00 USD</text>
            <text> = </text>
            <text>10.97 TJK</text>
          </view>
        </view>
      </uni-card>
    </view>
    <product-card />
  </view>
</template>

<script setup lang="ts">
import CustomNavBar from "./components/custom-nav-bar.vue";
import Banner from "./components/banner.vue";
import MenuPanel from "./components/menu-panel.vue";
import ProductCard from "./components/product-card.vue";
</script>

<style lang="scss"></style>
