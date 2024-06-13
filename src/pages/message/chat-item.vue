<template>
  <view
    class="message-item h-16 bg-white border-b-[1px] border-gray-200 flex items-center justify-between px-3 py-2 gap-2"
    @click="gotoChat()"
  >
    <view class="avatar h-12 w-12 rounded-lg overflow-hidden">
      <view
        class="h-full w-full bg-gradient-to-br from-blue-200 to-purple-200"
      ></view>
    </view>
    <view
      class="nickname-message h-full flex-1 flex flex-col justify-between gap-1 py-1"
    >
      <view class="text-sm">{{ chat.store?.name }}</view>
      <view class="text-gray-400 text-xs">
        {{ chat.messages!![0].content }}
      </view>
    </view>
    <view
      class="day-count h-full flex flex-col justify-between items-end gap-1 py-1"
    >
      <view class="text-gray-400 text-xs">{{ chat.lastTime }}</view>
      <view
        class="w-5 h-5 bg-red-500 rounded-full text-white text-xs flex items-center justify-center"
        v-if="chat.userUnreadCount ?? 0 > 0"
      >
        {{ chat.userUnreadCount }}
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import type { Chat } from "@/types";

const props = defineProps<{
  chat: Chat;
}>();

function gotoChat() {
  uni.navigateTo({ url: `/pages/message/chat/chat?chatId=${props.chat.id}` });
}
</script>

<style lang="scss" scoped></style>
