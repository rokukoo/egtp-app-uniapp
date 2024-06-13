<template>
  <div class="egtp-store" v-for="store in stores" :key="store.id">
    <div class="egtp-store-item bg-white rounded-md shadow-sm py-4 px-2">
      <div class="top flex items-center justify-between h-14">
        <div class="left h-full flex flex-col justify-between">
          <div class="name font-bold text-lg">
            {{ store.name }}
          </div>
          <div class="desc text-sm text-gray-400">
            {{ store.description }}
          </div>
        </div>
        <div class="right h-full flex flex-col items-end justify-between">
          <div class="go-shop-button">
            <nut-button
              type="primary"
              size="small"
              @click="navigateToStore(store.id!!)"
              >进店</nut-button
            >
          </div>
          <div class="area text-gray-400 text-sm">
            {{ store.country ?? "暂无" }} · {{ store.area ?? "暂无" }}
            &gt;
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Store } from "@/types/store";

const props = defineProps<{
  stores: Store[];
}>();

function navigateToStore(store_id: number) {
  console.log(store_id);
  uni.navigateTo({
    url: `/pages/store/store?store_id=${store_id}`,
  });
}
</script>

<style lang="scss" scoped></style>
