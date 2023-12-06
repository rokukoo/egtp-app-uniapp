<script lang="ts" setup>
// 获取屏幕边界到安全区域距离
const { safeAreaInsets } = uni.getSystemInfoSync();

import { getHomeBannerApi } from "@/services/home";
import type { BannerItem } from "@/types/home";
import { ref } from "vue";
import { onLoad } from "@dcloudio/uni-app";

const getHomeBannerData = async () => {
  const res = await getHomeBannerApi(2);
  console.log(res);
  bannerList.value = res.result;
};

const bannerList = ref<BannerItem[]>([]);

onLoad(() => {
  getHomeBannerData();
});

const props = defineProps();

import { useLoginStore } from "@/stores";

const loginStore = useLoginStore();
</script>

<template>
  <view
    class="logined-page space-y-3 pb-3"
    :style="{ paddingTop: safeAreaInsets!!.top + 36 + 'px' }"
  >
    <view class="flex items-center justify-between px-3">
      <view class="flex items-center gap-3">
        <view
          class="avatar w-10 h-10 rounded-full overflow-hidden flex-shrink-0"
        >
          <view
            class="w-full h-full bg-gradient-to-br from-blue-500 to-pink-300"
          />
        </view>
        <view class="text-lg font-bold">测试用户</view>
      </view>
      <view class="flex items-center gap-3">
        <nut-icon name="setting" size="16"></nut-icon>
      </view>
    </view>

    <view class="card mx-3 bg-white shadow rounded-md overflow-hidden">
      <nut-grid>
        <nut-grid-item text="足迹"><nut-icon name="footprint" /></nut-grid-item>
        <nut-grid-item text="店铺"><nut-icon name="shop3" /></nut-grid-item>
        <nut-grid-item text="收藏"><nut-icon name="follow" /></nut-grid-item>
        <nut-grid-item text="订购"><nut-icon name="date" /></nut-grid-item>
      </nut-grid>
    </view>

    <view class="mx-3 rounded-md overflow-hidden">
      <egtp-swiper class="banner" :list="bannerList" />
    </view>

    <view class="mx-3">
      <nut-cell-group>
        <nut-cell title="收货地址"></nut-cell>
        <nut-cell title="活动预定"></nut-cell>
        <nut-cell title="全部应用" desc="更多功能"></nut-cell>
      </nut-cell-group>
    </view>

    <view class="mx-3">
      <nut-cell-group>
        <nut-cell title="官方客服" desc="快速解答疑难问题"></nut-cell>
        <nut-cell title="商家入驻" desc="零费用快速入驻"></nut-cell>
      </nut-cell-group>
    </view>

    <view class="mx-3">
      <nut-cell-group>
        <nut-cell title="喜好设置"></nut-cell>
        <nut-cell title="用户反馈"></nut-cell>
        <nut-cell title="应用设置"></nut-cell>
      </nut-cell-group>
    </view>

    <view class="mx-3 space-y-2">
      <nut-button block type="primary" @click="loginStore.logout">
        退出登录
      </nut-button>
      <nut-button block> 切换账号 </nut-button>
    </view>
  </view>
</template>

<style lang="scss" scoped></style>
