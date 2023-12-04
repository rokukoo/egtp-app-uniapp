<template>
  <view class="logistics">
    <nut-searchbar
      v-model="searchValue"
      background="#3b3187"
      placeholder="请输入物流信息"
    >
      <template v-slot:leftin>
        <nut-icon name="search2" />
      </template>
    </nut-searchbar>
    <egtp-swiper :list="bannerList" />
    <view class="mt-2 px-2">
      <nut-cell custom-class="flex-wrap gap-2 shadow">
        <view class="font-bold text-lg text-black">物流查询</view>
        <view class="from w-full flex items-center justify-between gap-2 py-1">
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
        <view class="to w-full flex items-center justify-between gap-2 py-1">
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
        <view class="w-full flex items-center justify-between gap-2">
          <view class="text-gray-500 text-sm"> 更多设置 </view>
          <view>
            <nut-button size="small">切换起始</nut-button>
            <nut-button size="small" custom-color="#3b3187">
              立即查询
            </nut-button>
          </view>
        </view>
      </nut-cell>
    </view>

    <view>
      <view class="px-3">
        <nut-tabs v-model="state.tabValue">
          <nut-tab-pane
            title="热门物流"
            :custom-style="{ background: '#f6f6f6', padding: '10px 0' }"
          >
          </nut-tab-pane>
          <nut-tab-pane
            title="最新物流"
            :custom-style="{ background: '#f6f6f6', padding: '10px 0' }"
          >
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
