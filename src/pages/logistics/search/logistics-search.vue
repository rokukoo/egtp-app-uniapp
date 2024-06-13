<template>
  <view class="logistics-search h-full flex flex-col overflow-hidden">
    <nut-searchbar
      v-model="state.searchValue"
      background="#3b3187"
      placeholder="请输入物流信息"
      @search="navigateToSearch"
    >
      <template v-slot:leftin>
        <nut-icon name="search2" />
      </template>
    </nut-searchbar>
    <view class="flex-1 overflow-auto px-2 py-2">
      <egtp-logistics-list :data="[]" />
      <view class="h-12"></view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { onLoad } from "@dcloudio/uni-app";
import { reactive } from "vue";

const state = reactive({
  searchValue: "",
});

onLoad((options) => {
  const searchValue = options!!.searchValue;
  console.log(options);
  state.searchValue = searchValue;
});

const navigateToSearch = (val: any) => {
  uni.navigateTo({
    url: `/pages/logistics/search/logistics-search?searchValue=${val}`,
  });
};
</script>

<style lang="scss" scoped></style>
