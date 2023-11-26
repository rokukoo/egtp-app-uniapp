<template>
  <view>
    <custom-nav-bar />
    <banner />
    <uni-card @click="">菜单功能区</uni-card>
    <view class="flex">
      <uni-card @click="">时区展示区</uni-card>
      <uni-card @click="">汇率展示区</uni-card>
    </view>
    <uni-card @click="">推荐商品区</uni-card>
  </view>
</template>

<script setup lang="ts">
import CustomNavBar from "./components/custom-nav-bar.vue";
import Banner from "./components/banner.vue";
</script>

<style lang="scss"></style>
