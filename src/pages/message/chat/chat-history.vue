<template>
  <view class="chat-history min-h-full flex flex-col gap-2 px-3 py-2">
    <chat-item
      v-for="(item, index) in messages"
      :message="item.message"
      :isSelf="item.isSelf"
    />
  </view>
</template>

<script lang="ts" setup>
import chatItem from "./chat-item.vue";

const messages = [
  { message: "Hello how are you ? any order?", isSelf: false },
  {
    message: "Hi I am fine , yes of course next week will order some",
    isSelf: true,
  },
  { message: "ok no problem will wait for you", isSelf: false },
  { message: "ok see you my freind", isSelf: true },
];

const props = defineProps();
</script>

<style lang="scss" scoped></style>
