<template>
  <view class="product-details"> </view>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import type { Product } from "@/types/product";
import { onLoad } from "@dcloudio/uni-app";

const product = ref<Product>();

onLoad((options) => {
  console.log(options);
});
</script>

<style lang="scss" scoped></style>
