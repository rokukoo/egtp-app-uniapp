<template>
  <view class="message-panel h-full">
    <view
      class="top-action bg-primary h-12 flex items-center justify-between px-3 mb-4"
    >
      <view class="left"> </view>
      <view class="right flex items-center justify-end gap-4">
        <!-- <nut-icon name="search2" custom-color="#fff" size="16"></nut-icon> -->
        <nut-icon name="add" custom-color="#fff" size="16"></nut-icon>
        <nut-icon name="notice" custom-color="#fff" size="16"></nut-icon>
        <nut-icon name="more-x" custom-color="#fff" size="16"></nut-icon>
      </view>
    </view>
    <scroll-view scroll-y>
      <view class="flex flex-col rounded-lg overflow-hidden">
        <chat-item v-for="chat in chats" :key="chat.id" :chat="chat" />
      </view>
    </scroll-view>
  </view>
</template>

<script lang="ts" setup>
import type { Chat } from "@/types";
import ChatItem from "./chat-item.vue";

const props = defineProps<{
  chats: Chat[];
}>();
</script>

<style lang="scss" scoped></style>
