<template>
  <view
    class="chat-nav-bar bg-gray-100 border-b-[1px] border-gray-200 shadow-md h-12 flex justify-between items-center px-3 w-full"
    :style="{ marginTop: safeAreaInsets?.top + 'px' }"
  >
    <view class="left flex items-center gap-2">
      <nut-icon
        @click="back"
        name="rect-left"
        custom-color="black"
        size="16"
      ></nut-icon>
      <view class="">XXXX跨国物流公司</view>
    </view>
    <view class="right">
      <nut-icon name="more-x" custom-color="black" size="16"></nut-icon>
    </view>
  </view>
</template>

<script lang="ts" setup>
// 获取屏幕边界到安全区域距离
const { safeAreaInsets } = uni.getSystemInfoSync();

const props = defineProps();

function back() {
  uni.navigateBack();
}
</script>

<style lang="scss" scoped></style>
