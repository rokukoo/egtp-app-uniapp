<script setup lang="ts">
import type { Product } from "@/types/product";

defineProps<{
  products: Product[];
}>();

function gotoProductDetails(productId: string) {
  uni.navigateTo({
    url: `/pages/product/product-details?productId=${productId}`,
  });
}
</script>

<template>
  <view>
    <!-- <view class="text-center mb-2">
      <text class="">{{ "热门商品" }}</text>
    </view> -->
    <view class="flex flex-col gap-4">
      <view
        class="card bg-white shadow rounded h-28 flex gap-2 overflow-hidden"
        v-for="(item, index) in products"
        :key="index"
        @click="gotoProductDetails(item.productId!!)"
      >
        <view class="product-img h-28 w-28">
          <view
            class="w-full h-full bg-gradient-to-br from-primary to-purple-200"
          ></view>
        </view>
        <view
          class="product-content flex-1 px-2 py-1 flex flex-col justify-between"
        >
          <view class="product-header">
            <text class="product-tag">
              <text
                :style="{ fontSize: '24rpx' }"
                class="bg-primary text-white inline-block px-1 py-0.5 text-xs rounded"
              >
                HOT
              </text>
            </text>
            <text class="product-title text-sm">
              玖合(JUHOR) 32GB(16Gx2)套装 DDR4 3200 台式机内存
            </text>
          </view>
          <view class="flex-1"> </view>
          <view class="product-info">
            <view class="product-price text-primary font-bold">
              <text class="text-xs">￥</text>
              <text class="text font-bold">
                <text class="text-md">379.</text><text class="text-xs">00</text>
              </text>
            </view>
            <view class="product-amount">
              <text class="text-gray-500 text-xs">近期已售1000+件</text>
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>
