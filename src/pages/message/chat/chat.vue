<template>
  <view
    class="chat h-full flex flex-col justify-between"
    :style="{ paddingTop: (safeAreaInsets?.top ?? 0) + 48 + 'px' }"
  >
    <chat-nav-bar :name="store?.name ?? ''" />
    <view class="flex-1 overflow-hidden">
      <scroll-view scroll-y style="height: 100%">
        <message-history :messages="messages" />
      </scroll-view>
    </view>
    <chat-input-bar @confirm="handleSend" />
  </view>
</template>

<script lang="ts" setup>
import chatNavBar from "./chat-nav-bar.vue";
import chatInputBar from "./chat-input-bar.vue";
import MessageHistory from "./message-history.vue";
import { ref } from "vue";
import { onLoad } from "@dcloudio/uni-app";
import { getChatApi, getOrCreateChatApi, sendMessageApi } from "@/services";
import type { Message, Store } from "@/types";
import { getStoreByIdApi } from "@/services/store";

const chatId = ref<string>();
const store = ref<Store>();

const messages = ref<Message[]>([]);

onLoad((options) => {
  if (options!!.storeId) {
    const _storeId = options!!.storeId;
    getStoreByIdApi(_storeId).then((res) => (store.value = res.data));
    getOrCreateChatApi(_storeId).then((chat) => {
      chatId.value = chat!!.id;
      messages.value = chat!!.messages ?? [];
    });
  } else if (options!!.chatId) {
    const _chatId = options!!.chatId;
    chatId.value = _chatId;
    getChatApi(_chatId).then((chat) => {
      messages.value = chat!!.messages ?? [];
      store.value = chat!!.store;
    });
  }
});

const { safeAreaInsets } = uni.getSystemInfoSync();

const props = defineProps();

const handleSend = (content: string) => {
  sendMessageApi(chatId.value!!, content).then((res) => {
    messages.value.push(res.data as Message);
  });
  console.log(content);
};

function back() {
  uni.navigateBack();
}
</script>

<style lang="scss" scoped></style>
