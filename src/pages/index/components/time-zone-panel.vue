<script lang="ts" setup>
import { useI18n } from "vue-i18n";

const props = defineProps();

const { t } = useI18n();
</script>

<template>
  <view class="card bg-white shadow rounded h-full px-3 flex flex-col">
    <view
      class="card-header py-2 flex items-center gap-2 border-b-[1px] border-b-gray-200"
    >
      <text class="card-title text-black text-md">{{
        t("index.timeZone.title")
      }}</text>
      <text class="card-title text-gray-400 text-sm">{{ "轻松查看" }}</text>
    </view>
    <view class="card-content py-2 flex-1 flex items-center justify-center">
      <view>
        <view class="flex items-center justify-between gap-2">
          <view
            class="text-right flex-1 whitespace-nowrap flex-nowrap gap-1 items-end"
          >
            <text class="text-sm">塔吉克斯坦</text>
          </view>
          <text class="text-center text-lg font-bold">15:55</text>
        </view>

        <view
          class="w-full h-[2px] my-1 bg-gradient-to-r from-primary to-pink-200"
        >
        </view>

        <view class="flex items-center justify-between gap-2">
          <view
            class="text-right flex-1 whitespace-nowrap flex-nowrap gap-1 items-end"
          >
            <text class="text-sm">中国</text>
          </view>
          <text class="text-center text-lg font-bold">18:55</text>
        </view>
      </view>
    </view>
  </view>
</template>

<style lang="scss" scoped>
:host {
  display: contents;
}
</style>
