<template>
  <view class="message">
    <view
      class="bg-primary"
      :style="{ height: safeAreaInsets?.top + 'px' }"
    ></view>
    <view class="bg-primary text-white flex items-center justify-center gap-1">
      <text class="text-lg">消息列表</text> <text class="text-sm">(23)</text>
    </view>
    <message-panel />
  </view>
</template>

<script lang="ts" setup>
import { reactive } from "vue";
import MessagePanel from "./message-panel.vue";
import NoticePanel from "./notice-panel.vue";

// 获取屏幕边界到安全区域距离
const { safeAreaInsets } = uni.getSystemInfoSync();

const state = reactive({
  tab1value: "0",
});
</script>

<style lang="scss" scoped></style>
