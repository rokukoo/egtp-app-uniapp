<script setup lang="ts">
import HotLogisticsItem from "./hot-logistics-item.vue";
</script>

<template>
  <view class="flex gap-2">
    <!-- 双栏式瀑布流 -->
    <view class="col-1 flex-1 flex flex-col gap-4">
      <hot-logistics-item v-for="(item, index) in 10" />
    </view>
    <!-- <view class="col-2 flex-1 flex flex-col gap-4">
      <hot-logistics-item v-for="(item, index) in 12" />
    </view> -->
  </view>
</template>
