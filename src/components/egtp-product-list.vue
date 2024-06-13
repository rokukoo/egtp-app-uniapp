<template>
  <view class="egtp-product-list">
    <view class="grid grid-cols-2 gap-2">
      <view
        v-for="(item, idx) in 5"
        :key="idx"
        class="bg-white rounded-md overflow-hidden pb-2"
      >
        <view
          class="bg-red-400 animate-pulse duration-300 h-40 rounded-md overflow-hidden"
        >
          <image class="h-full w-full" src="" mode="scaleToFill" />
        </view>
        <view class="px-1">
          <view>
            <text class="text-lg font-bold">{{ `测试产品 ${idx}` }}</text>
          </view>
          <view>
            <view class="text-primary">
              <text class="text-sm mr-0.5">¥</text>
              <text class="text-lg font-bold">
                {{ (Math.random() * 100).toFixed(2) }}
              </text>
            </view>
          </view>
          <view>
            <text class="text-xs text-gray-400">1000+人看过</text>
            <text class="text-xs text-gray-400 mx-1">·</text>
            <text class="text-xs text-gray-400">100+人收藏</text>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import type { Product } from "@/types/product";

const props = defineProps<{
  list: Product[];
}>();
</script>

<style lang="scss" scoped></style>
