<template>
  <view class="egtp-store-list bg-white rounded-md overflow-hidden space-y-2">
    <view
      v-for="(item, idx) in list"
      :key="idx"
      class="flex h-32"
      @click="navigateToStore(item)"
    >
      <view class="w-32 h-full rounded-md overflow-hidden">
        <view class="w-full h-full bg-primary animate-pulse"></view>
        <!-- <image class="h-full w-full" src="" mode="scaleToFill" /> -->
      </view>
      <view class="px-2 flex-1 flex flex-col justify-between">
        <view class="space-y-1">
          <view>
            <text class="text-lg font-bold">{{ item.name }}</text>
          </view>
          <view class="">
            <view class="flex text-sm items-center">
              <view class="font-bold text-black">普通店铺</view>
              <view class="text-gray-300">丨</view>
              <view class="text-gray-500">4年</view>
              <view class="text-gray-300">丨</view>
              <view class="text-black">
                {{ item.country ?? "未知" }}·{{ item.area ?? "未知" }}
              </view>
            </view>
          </view>
          <view v-show="true">
            <nut-tag
              custom-color="linear-gradient(to right,#3c3287,#f8cde7)"
              custom-class="mr-1"
            >
              金牌店铺
            </nut-tag>
            <nut-tag
              custom-color="linear-gradient(to right,#f8cd2e,#ecae21)"
              custom-class="mr-1"
            >
              优质服务
            </nut-tag>
          </view>
        </view>
        <view>
          <text class="text-xs text-gray-400">1000+人看过</text>
          <text class="text-xs text-gray-400 mx-0.5">·</text>
          <text class="text-xs text-gray-400">100+人收藏</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import type { Store } from "@/types/store";

const props = defineProps<{
  list: Store[];
}>();

function navigateToStore(item: Store) {
  uni.navigateTo({
    url: `/pages/store/store?storeId=${item.storeId}`,
  });
}
</script>

<style lang="scss" scoped></style>
