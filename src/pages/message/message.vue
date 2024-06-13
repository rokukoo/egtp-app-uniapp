<template>
  <view class="message">
    <view
      class="bg-primary"
      :style="{ height: safeAreaInsets?.top + 'px' }"
    ></view>
    <view class="bg-primary text-white flex items-center justify-center gap-1">
      <text class="text-lg">消息列表</text>
      <text class="text-sm">({{ chats.length }})</text>
    </view>
    <message-panel :chats="chats" />
  </view>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
import MessagePanel from "./message-panel.vue";
import type { Chat } from "@/types";
import { onLoad, onReady, onShow } from "@dcloudio/uni-app";
import { listChatApi } from "@/services";

// 获取屏幕边界到安全区域距离
const { safeAreaInsets } = uni.getSystemInfoSync();

const chats = ref<Chat[]>([]);

const getChatListData = async () => {
  listChatApi().then((res) => {
    chats.value = res.rows!!;
  });
};

onShow(() => {
  getChatListData();
});

const state = reactive({
  tab1value: "0",
});
</script>

<style lang="scss" scoped></style>
