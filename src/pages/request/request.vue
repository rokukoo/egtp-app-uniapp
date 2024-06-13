<template>
  <view class="request">
    <!--  -->

    <!-- 底部工具栏 -->
    <view
      class="flex items-center justify-between fixed bottom-0 w-full h-20 bg-white shadow-lg px-4"
    >
      <view></view>
      <view class="flex">
        <view
          class="rounded-l-full text-base bg-purple-100 text-primary px-4 h-10 gap-2 flex items-center justify-center"
        >
          <!-- <uni-icons type="list" size="18" color="#3b3187"></uni-icons> -->
          <text>我的需求</text>
        </view>
        <view
          class="rounded-r-full text-white bg-primary px-4 h-10 flex gap-2 items-center justify-center"
        >
          <uni-icons
            type="paperplane-filled"
            size="18"
            color="#fff"
          ></uni-icons>
          <text @click="navigateTonewRequest" class="text-base">
            发布需求
          </text>
        </view>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { useLoginStore } from "@/stores";

const { logined } = useLoginStore();

const navigateTonewRequest = () => {
  if (logined) {
    uni.navigateTo({
      url: "/pages/request/new-request",
    });
  } else {
    uni.switchTab({
      url: "/pages/info/info",
    });
  }
};
</script>

<style lang="scss" scoped></style>
