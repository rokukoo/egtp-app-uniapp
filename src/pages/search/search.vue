<template>
  <view
    class="search space-y-3"
    :style="{ paddingTop: safeAreaInsets?.top + 'px' }"
  >
    <search-nav-bar />
    <view class="mx-3 space-y-3 mb-3">
      <view class="flex items-center justify-between">
        <view class="text-md font-bold">搜索历史</view>
        <nut-icon name="del" @click="clearHistory" />
      </view>
      <view class="flex flex-wrap items-center gap-3">
        <view
          class="bg-white px-2 py-1 rounded-full text-sm"
          v-for="item in history"
          :key="'1_history - ' + item"
          @click="searchByWord(`${item}`)"
        >
          {{ item }}
        </view>
      </view>
    </view>
    <view class="mx-3 space-y-3">
      <view class="flex items-center justify-between">
        <view class="text-md font-bold">好物发现</view>
        <nut-icon name="eye" />
        <!-- <nut-icon name="marshalling" /> -->
      </view>
      <view class="flex flex-wrap items-center gap-3">
        <view
          class="bg-white px-2 py-1 rounded-full text-sm"
          @click="searchByWord(`${item}`)"
          :key="'2_hot - ' + item"
          v-for="item in hot"
        >
          {{ item }}</view
        >
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { useSearchStore } from "@/stores";
import SearchNavBar from "./search-nav-bar.vue";

const { history, hot, search, clearHistory } = useSearchStore();

// 获取屏幕边界到安全区域距离
const { safeAreaInsets } = uni.getSystemInfoSync();

function searchByWord(keyWord: string) {
  search(keyWord);
  uni.navigateTo({ url: `/pages/search/search-result?keyWord=${keyWord}` });
}
</script>

<style lang="scss" scoped></style>
