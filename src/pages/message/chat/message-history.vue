<template>
  <view
    class="chat-history min-h-full flex flex-col gap-2 px-3 py-2"
    v-if="messages?.length ?? 0 > 0"
  >
    <message-item
      v-for="(item, index) in messages"
      :message="item.content"
      :isSelf="item.isSelf"
    />
  </view>
  <view class="min-h-full flex items-center justify-center" v-else>
    <view class="text-center text-gray-400">No messages yet</view>
  </view>
</template>

<script lang="ts" setup>
import type { Message } from "@/types";
import MessageItem from "./message-item.vue";

// const messages = [
//   { message: "Hello how are you ? any order?", isSelf: false },
//   {
//     message: "Hi I am fine , yes of course next week will order some",
//     isSelf: true,
//   },
//   { message: "ok no problem will wait for you", isSelf: false },
//   { message: "ok see you my freind", isSelf: true },
// ];

const props = defineProps<{ messages?: Message[] }>();
</script>

<style lang="scss" scoped></style>
