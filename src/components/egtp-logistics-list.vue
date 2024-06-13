<template>
  <view class="egtp-logistics-list w-full">
    <scroll-view scroll-y>
      <!-- 两栏式布局 -->
      <view class="grid grid-cols-2 gap-2">
        <!-- 物流商卡片 -->
        <view
          v-for="(item, idx) in 5"
          :key="idx"
          class="bg-white shadow-md rounded-md overflow-hidden pb-2"
        >
          <!-- 物流商封面图片 -->
          <view
            class="bg-orange-400 animate-pulse h-40 rounded-md overflow-hidden"
          >
            <image class="h-full w-full" src="" mode="scaleToFill" />
          </view>
          <!-- 物流商信息 -->
          <view class="px-1">
            <!-- 物流商名称 -->
            <view>
              <text class="text-lg font-bold">物流商名称</text>
            </view>
            <!-- 物流商信息 -->
            <view>
              <!-- 物流路线信息 -->
              <view class="text-sm">
                <text class="text-gray-400">从</text>
                <text class="mx-0.5 text-primary">中国</text>
                <text class="text-gray-400">到</text>
                <text class="mx-0.5 text-primary">塔吉克斯坦</text>
              </view>
            </view>

            <!-- 交互 -->
            <view class="my-0.5">
              <nut-button custom-color="#3b3187" plain size="mini">
                进店查看 &gt;
              </nut-button>
            </view>
            <!-- 其他信息 -->
            <view>
              <text class="text-xs text-gray-400">1000+人看过</text>
              <text class="text-xs text-gray-400 mx-1">·</text>
              <text class="text-xs text-gray-400">100+人收藏</text>
            </view>
          </view>
        </view>
      </view>
    </scroll-view>
  </view>
</template>

<script lang="ts" setup>
import type { Store } from "@/types/store";

const props = withDefaults(
  defineProps<{
    cols: number;
    data?: Store[];
  }>(),
  { cols: 2 }
);
</script>

<style lang="scss" scoped></style>
