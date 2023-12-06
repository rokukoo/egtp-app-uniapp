<template>
  <view
    class="search-nav-bar h-16 flex items-center justify-between px-3 gap-3"
  >
    <view class="back-icon" @click="back">
      <nut-icon name="rect-left" />
    </view>
    <view class="search-bar-input flex-1">
      <view
        class="w-full border-2 px-3 h-9 py-0.5 rounded-full border-primary flex items-center gap-2"
      >
        <input
          class="w-full"
          v-model="value"
          confirm-type="search"
          input-mode="search"
          placeholder="搜索商品/商家/物流.."
          @confirm="search"
        />
        <nut-icon name="photograph" />
      </view>
    </view>
    <view class="search-bar-button">
      <view @click="search">搜索</view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { ref, defineEmits } from "vue";

const props = defineProps();

const value = ref("");

function search() {
  uni.navigateTo({
    url: `/pages/search/search-result?keyWord=${value.value}`,
  });
}

function back() {
  uni.navigateBack();
}
</script>

<style lang="scss" scoped></style>
