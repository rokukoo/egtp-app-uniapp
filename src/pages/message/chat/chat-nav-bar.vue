<template>
  <view
    class="fixed z-10 top-0 chat-nav-bar bg-gray-100 border-b-[1px] border-gray-200 shadow-md h-24 flex justify-between items-center px-3 w-full"
    :style="{ paddingTop: (safeAreaInsets?.top ?? 0) + 'px' }"
  >
    <view class="left flex items-center gap-2">
      <nut-icon
        @click="back"
        name="rect-left"
        custom-color="black"
        size="16"
      ></nut-icon>
      <view class="">{{ name }}</view>
    </view>
    <view class="right">
      <nut-icon name="more-x" custom-color="black" size="16"></nut-icon>
    </view>
  </view>
</template>

<script lang="ts" setup>
// 获取屏幕边界到安全区域距离
const { safeAreaInsets } = uni.getSystemInfoSync();

const props = defineProps<{
  name: string;
}>();

function back() {
  uni.navigateBack();
}
</script>

<style lang="scss" scoped></style>
