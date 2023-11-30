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
        t("index.exchangeRate.title")
      }}</text>
      <text class="card-title text-gray-400 text-sm">{{ "精准把握" }}</text>
    </view>
    <view class="card-content py-2 flex-1 flex items-center">
      <view class="w-full">
        <view class="w-full">
          <view>
            <text class="text-xs text-gray-500">USD - RMB</text>
          </view>
          <view class="text-center w-full">
            <text>1.00</text>
            <text> = </text>
            <text>7.05</text>
          </view>
        </view>

        <view
          class="w-full h-[2px] my-1 bg-gradient-to-r from-primary to-pink-200"
        >
        </view>

        <view class="w-full">
          <view>
            <text class="text-xs text-gray-500">USD - TJK</text>
          </view>
          <view class="text-center">
            <text>1.00</text>
            <text> = </text>
            <text>10.97</text>
          </view>
        </view>
      </view>
    </view>
  </view>
  <!-- <uni-card
    is-full
    :title="t('index.exchangeRate.title')"
    @click=""
    class="flex-1 block"
  >
    <template v-slot:extra>
      <text class="text-gray-500 text-xs">{{
        t("index.exchangeRate.action1")
      }}</text>
    </template>
    <view class="h-full flex flex-col justify-between">
      <view class="flex w-full justify-between">
        <text>1.00 USD</text>
        <text> = </text>
        <text>7.05 RMB</text>
      </view>
      <view class="flex w-full justify-between">
        <text>1.00 USD</text>
        <text> = </text>
        <text>10.97 TJK</text>
      </view>
    </view>
  </uni-card> -->
</template>

<style lang="scss" scoped>
:host {
  display: contents;
}
</style>
