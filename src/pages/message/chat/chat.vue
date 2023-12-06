<template>
  <view class="chat h-full flex flex-col justify-between">
    <chat-nav-bar />
    <view class="flex-1 overflow-hidden">
      <scroll-view scroll-y style="height: 100%">
        <chat-history />
      </scroll-view>
    </view>
    <chat-input-bar />
  </view>
</template>

<script lang="ts" setup>
import chatNavBar from "./chat-nav-bar.vue";
import chatInputBar from "./chat-input-bar.vue";
import chatHistory from "./chat-history.vue";

const props = defineProps();

function back() {
  uni.navigateBack();
}
</script>

<style lang="scss" scoped></style>
