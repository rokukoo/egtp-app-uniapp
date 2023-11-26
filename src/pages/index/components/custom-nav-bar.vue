<template>
  <!-- <view
    class="nav-bar bg-gradient-to-b from-primary to-purple-900 px-2 pt-4 pb-1 space-y-2"
  > -->
  <view
    class="nav-bar w-full fixed z-10 top-0 bg-primary h-28 px-2 pt-4 pb-2 space-y-4"
  >
    <view class="logo flex gap-0.5 items-center justify-between text-white">
      <view>
        <text class="logo-image text-xl font-bold">{{ t("app.title") }}</text>
        <text class="">丨</text>
        <text class="text-sm">{{ t("app.desc") }}</text>
      </view>
      <view class="flex gap-1">
        <v-icon
          @click="changeLocale"
          name="fa-question-circle"
          class="fill-white text-md"
        />
        <v-icon
          @click="changeLocale"
          name="fa-globe"
          class="fill-white text-md"
        />
      </view>
    </view>
    <view
      class="search-bar overflow-hidden py-1 px-2 bg-white bg- h-8 rounded-full flex items-center gap-1 justify-around"
    >
      <view class="flex items-center h-full">
        <v-icon name="fa-search" class="fill-primary text-sm" />
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
        <uni-icons
          type="scan"
          size="18"
          class="!text-primary text-sm"
        ></uni-icons>
        <view class="px-1">
          <v-icon name="fa-camera" class="fill-primary text-sm" />
        </view>
        <!-- <view
          class="!bg-primary px-3 py-1 text-white text-xs rounded-full whitespace-nowrap"
          @click="navigateToSearchPage"
        >
          搜索
        </view> -->
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n();

function navigateToSearchPage() {
  uni.navigateTo({ url: "/pages/search/search" });
}

function changeLocale() {
  console.log("changeLocale!");
}
</script>

<style lang="scss">
// @import "@/scss/index.scss";

// .nav-bar {
//   background-color: $primary-color;
// }
</style>
