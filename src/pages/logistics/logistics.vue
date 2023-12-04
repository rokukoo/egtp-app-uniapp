<template>
  <view class="logistics">
    <!-- <nut-searchbar
      v-model="searchValue"
      background="#3b3187"
      placeholder="请输入物流信息"
    >
      <template v-slot:leftin>
        <nut-icon name="search2" />
      </template>
    </nut-searchbar> -->
    <view class="mt-3 px-3">
      <egtp-swiper :list="bannerList" />
    </view>
    <view class="mt-3 px-3">
      <!-- <nut-cell custom-class="flex-wrap gap-2 shadow"> -->
      <view class="card bg-white shadow rounded h-full px-3 flex flex-col">
        <view
          class="card-header py-2 flex items-center gap-2 border-b-[1px] border-b-gray-200"
        >
          <text class="card-title text-black text-md"> 物流查询 </text>
          <text class="card-title text-gray-400 text-sm">{{
            "跨国物流一键查询"
          }}</text>
        </view>
        <view class="card-content py-2 flex-1 flex items-center justify-center">
          <view class="w-full space-y-2">
            <view
              class="from w-full flex items-center justify-between gap-2 py-1"
            >
              <view
                class="bg-black rounded text-white px-1 h-6 flex items-center justify-center"
              >
                <text>起始</text>
                <!-- <text>Start</text> -->
              </view>
              <view class="flex-1">
                <text>东亚 - 中国</text>
              </view>
              <view class="text-black">
                <text>修改</text>
              </view>
            </view>
            <view class="h-[1rpx] bg-gray-100 w-full"></view>
            <view
              class="to w-full flex items-center justify-between gap-2 py-1"
            >
              <view
                class="bg-primary rounded text-white px-1 h-6 flex items-center justify-center"
              >
                <text>终点</text>
                <!-- <text>End</text> -->
              </view>
              <view class="flex-1">
                <text>中亚 - 塔吉克斯坦</text>
              </view>
              <view class="text-black">
                <text>修改</text>
              </view>
            </view>
            <view class="h-[1rpx] bg-gray-100 w-full"></view>
            <view class="w-full flex items-center justify-between gap-2">
              <view class="text-gray-500 text-sm"> 更多设置 </view>
              <view class="space-x-2">
                <nut-button>切换起始</nut-button>
                <nut-button custom-color="#3b3187"> 立即查询 </nut-button>
              </view>
            </view>
          </view>
        </view>
      </view>
      <!-- </nut-cell> -->
    </view>

    <view>
      <view class="px-3">
        <nut-tabs v-model="state.tabValue">
          <nut-tab-pane
            title="热门物流"
            :custom-style="{ background: '#f6f6f6', padding: '10px 0' }"
          >
            <hot-logistics />
          </nut-tab-pane>
          <nut-tab-pane
            title="最新物流"
            :custom-style="{ background: '#f6f6f6', padding: '10px 0' }"
          >
            <hot-logistics />
          </nut-tab-pane>
        </nut-tabs>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { ref, reactive } from "vue";
import { getHomeBannerApi } from "@/services/home";
import { onLoad } from "@dcloudio/uni-app";
import type { BannerItem } from "@/types/home";
import HotLogistics from "./hot-logistics.vue";

const getHomeBannerData = async () => {
  const res = await getHomeBannerApi();
  console.log(res);
  bannerList.value = res.result;
};

const searchValue = ref("");
const bannerList = ref<BannerItem[]>([]);

onLoad(() => {
  getHomeBannerData();
});

const state = reactive({
  tabValue: "0",
});
</script>

<style scoped></style>
