<template>
  <view class="chat-item w-full">
    <!-- isSelf 为 true, 代表此条聊天消息由用户发出, 视觉上应该在右边 -->
    <view v-if="isSelf" class="w-full flex gap-2 items-start justify-end">
      <view class="space-y-1">
        <view class="text-xs text-gray-500 text-right">2023/12/5 19:13</view>
        <view class="message-content py-3 px-3 rounded-md bg-purple-100">
          {{ message }}
        </view>
      </view>
      <!-- Tips: flex-shrink-0 必加, 避免消息过长导致头像被拉伸 -->
      <view class="avatar w-9 h-9 rounded-full overflow-hidden flex-shrink-0">
        <view
          class="w-full h-full bg-gradient-to-br from-blue-500 to-pink-300"
        ></view>
      </view>
    </view>
    <!-- isSelf 为 false, 代表此条聊天消息由对方发出, 视觉上应该在左边 -->
    <view v-else class="w-full flex gap-2 items-start justify-start">
      <!-- Tips: flex-shrink-0 必加, 避免消息过长导致头像被拉伸 -->
      <view class="avatar w-9 h-9 rounded-full overflow-hidden flex-shrink-0">
        <view
          class="w-full h-full bg-gradient-to-br from-orange-500 to-red-400"
        ></view>
      </view>
      <view class="space-y-1">
        <view class="text-xs text-gray-500 text-left">2023/12/5 19:13</view>
        <view class="message-content py-3 px-3 rounded-md bg-white">
          {{ message }}
        </view>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
const props = defineProps<{
  isSelf: boolean;
  message: string;
}>();
</script>

<style lang="scss" scoped></style>
