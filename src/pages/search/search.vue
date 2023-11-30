<template>
  <view class="search">
    <nut-navbar @click-back="back" title="搜索商品">
      <template #left>
        <div>返回</div>
      </template>
      <template #right>
        <!-- <ShareN width="16px" /> -->
      </template>
    </nut-navbar>
  </view>
</template>

<script lang="ts" setup>
function back() {
  uni.navigateBack();
}
</script>

<style lang="scss" scoped></style>
