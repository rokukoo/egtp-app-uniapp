<script setup lang="ts">
function navigateToLogisticsDetails() {
  uni.navigateTo({
    url: "/pages/logistics/details/details",
  });
}
</script>

<template>
  <view class="bg-white rounded overflow-hidden shadow-md">
    <view class="logo-image h-28">
      <view
        class="w-full h-full bg-gradient-to-br from-primary to-blue-300"
      ></view>
    </view>
    <view class="px-2 py-2 text-sm flex items-center justify-between">
      <view>
        <view class="title"> XXXX跨国物流公司 </view>
        <view class="sub-title text-xs text-gray-400">
          <view> 范围: 中国 - 塔吉克斯坦 </view>
          <!-- <view class="phone">TEL: 138-xxxx-xxxx</view> -->
        </view>
      </view>
      <view>
        <nut-button
          type="primary"
          class="w-full"
          custom-color="#3b3187"
          size="small"
          @click="navigateToLogisticsDetails()"
        >
          查看物流
        </nut-button>
      </view>
    </view>
  </view>
</template>
