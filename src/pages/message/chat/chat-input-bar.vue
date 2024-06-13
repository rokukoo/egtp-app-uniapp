<template>
  <view
    class="h-28 w-full bg-gray-100 border-t-[1px] border-gray-200 flex flex-col gap-2 justify-end pb-10 fixed bottom-0 left-0"
  >
    <!-- <view class="bubbles">
        <view>最近有空吗?</view>
        <view>方便联系下吗?</view>
        <view>订单查询</view>
      </view> -->
    <view class="h-10 flex items-center gap-2 justify-between px-2">
      <view class="flex-1 h-10">
        <input
          v-model="message"
          @input="$emit('input', message)"
          class="h-full bg-white rounded-lg px-3"
          @confirm="$emit('confirm', message)"
        />
      </view>
      <view class="h-full flex items-center gap-2">
        <view
          class="h-full w-10 flex items-center justify-center bg-white rounded-lg"
        >
          <uni-icons type="image" size="24"></uni-icons>
        </view>
        <view
          class="h-full w-10 flex items-center justify-center bg-white rounded-lg"
        >
          <nut-icon name="uploader"></nut-icon>
        </view>
        <view class="h-full"></view>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const props = defineProps();

const message = ref("");
</script>

<style lang="scss" scoped></style>
