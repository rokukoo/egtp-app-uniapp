<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n();

function changeLocale() {
  console.log("changeLocale!");
}

function navigateToSearchPage() {
  uni.navigateTo({ url: "/pages/search/search" });
}

// 获取屏幕边界到安全区域距离
const { safeAreaInsets } = uni.getSystemInfoSync();
</script>

<style lang="scss"></style>

<template>
  <view
    class="nav-bar w-full top-0 bg-primary px-3 pt-4 pb-4 flex flex-col space-y-4"
    :style="{ paddingTop: safeAreaInsets?.top + 'px' }"
  >
    <view class="logo flex gap-0.5 items-center justify-between text-white">
      <view>
        <text class="logo-image text-xl font-bold">{{ t("app.title") }}</text>
        <text class="">丨</text>
        <text class="text-sm">{{ t("app.desc") }}</text>
      </view>
      <view class="flex gap-1">
        <font-awesome-icon @click="changeLocale" :icon="['fas', 'globe']" />
        <font-awesome-icon @click="changeLocale" :icon="['fas', 'cog']" />
      </view>
    </view>
    <!-- search bar -->
    <view
      class="py-1 px-3 bg-gray-100 h-8 rounded-full flex items-center gap-1 justify-around mt-auto"
    >
      <view class="flex items-center h-full">
        <uni-icons type="search" size="18" class="!text-primary"></uni-icons>
        <view class="w-[1px] mx-1 h-1/2 bg-gray-300" />
      </view>
      <view
        class="flex-1 h-full flex items-center"
        @click="navigateToSearchPage"
      >
        <text class="text-gray-400 text-xs whitespace-nowrap overflow-ellipsis">
          {{ t("placeholder.searchTips") }}
        </text>
      </view>
      <view class="h-full flex items-center gap-1">
        <uni-icons type="scan" size="18" class="!text-primary"></uni-icons>
        <!-- <uni-icons type="camera" size="20" class="!text-primary"></uni-icons> -->
      </view>
    </view>
  </view>
</template>
