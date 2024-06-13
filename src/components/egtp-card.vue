<template>
  <view class="egtp-card bg-white shadow px-2 py-1 overflow-hidden">
    <view class="card-header">
      <text>{{ title }}</text>
      <text>{{ desc }}</text>
    </view>
    <view class="card-content">
      <slot></slot>
    </view>
  </view>
</template>

<script lang="ts" setup>
const props = defineProps<{
  title?: string;
  desc?: string;
}>();

const options = defineOptions({
  multipleSlots: true,
  styleIsolation: "isolated",
  addGlobalClass: true,
  virtualHost: true,
});
</script>

<style lang="scss" scoped>
:host {
  display: contents;
}
</style>
