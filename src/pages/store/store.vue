<template>
  <view
    :style="{ paddingTop: (safeAreaInsets?.top ?? 0 + 36) + 'px' }"
    class="px-2 space-y-3 pb-36"
  >
    <view
      class="fixed w-full bg-white"
      :style="{ marginTop: safeAreaInsets?.top + 'px' }"
    >
      <search-nav-bar v-model:keyWord="keyWord" />
    </view>
    <view>
      <egtp-swiper :list="[]" />
    </view>
    <view class="bg-white rounded-md py-2 px-3 space-y-2">
      <view class="text-lg font-bold">{{ store.name }}</view>

      <view class="flex gap-2 items-center">
        <nut-tag round custom-color="#3b3187">官方认证</nut-tag>
        <nut-tag round type="primary">品牌店铺</nut-tag>
        <view class="text-xs text-gray-500">10 年</view>
        <view class="text-xs text-gray-500">主营：XXXXXXXXXXXXXX</view>
      </view>

      <view class="flex items-center justify-between">
        <view class="flex gap-2 items-center flex-nowrap whitespace-nowrap">
          <view class="text-xs text-gray-500">浏览量：1000+</view>
          <view class="text-xs text-gray-500">客户数：100+</view>
          <view class="text-xs text-gray-500 flex items-center">
            <text class="mr-1">评分：</text>
            <uni-icons
              v-for="i in value"
              type="star-filled"
              color="#3b3187"
              size="12"
            />
            <uni-icons v-for="i in 5 - value" type="star" color="" size="12" />
            <text class="ml-1">{{ value.toFixed(1) }}</text>
          </view>
        </view>
        <view> <uni-icons type="right" color="" size="12" /> </view>
      </view>

      <view class="flex items-center justify-between">
        <view class="flex items-center gap-1 flex-nowrap">
          <uni-icons type="location" size="16" />
          <view
            class="text-xs text-gray-500 w-72 text-ellipsis overflow-hidden"
          >
            ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZ
          </view>
        </view>
        <view> <uni-icons type="right" color="" size="12" /> </view>
      </view>
    </view>

    <view class="bg-white rounded-md px-1 py-2 space-y-2 pl-4">
      <view class="text-lg font-bold">产品信息</view>
      <view class="flex flex-col gap-3">
        <view class="text-gray-500 text-sm">暂无</view>
      </view>
    </view>

    <view class="bg-white rounded-md px-1 py-2 space-y-2 pl-4 w-full">
      <view class="text-lg font-bold">店铺信息</view>
      <view class="flex flex-col gap-3 text-xs">
        <view class="flex items-center gap-1">
          <!-- <uni-icons type="home" color="" size="14" /> -->
          <view class="font-bold w-24">所在地区</view>
          <view class="flex-1 text-gray-500">{{
            store.country + store.area
          }}</view>
        </view>
        <view class="flex items-center gap-1">
          <!-- <uni-icons type="home" color="" size="14" /> -->
          <view class="font-bold w-24">联系人</view>
          <view class="flex-1 text-gray-500">{{ "Zhang Hong" }}</view>
        </view>
        <view class="flex items-center gap-1">
          <!-- <uni-icons type="home" color="" size="14" /> -->
          <view class="font-bold w-24">联系人电话</view>
          <view class="flex-1 text-gray-500">{{ "+86 13208030926" }}</view>
        </view>
        <view class="flex items-center gap-1">
          <!-- <uni-icons type="home" color="" size="14" /> -->
          <view class="font-bold w-24">联系人邮箱</view>
          <view class="flex-1 text-gray-500">{{ "tigernu@gmail.com" }}</view>
        </view>
        <view class="flex items-center gap-1">
          <!-- <uni-icons type="home" color="" size="14" /> -->
          <view class="font-bold w-24">网站</view>
          <view class="flex-1 text-gray-500">{{ "www.tigernu.com" }}</view>
        </view>
        <view class="flex items-start gap-1 w-full">
          <!-- <uni-icons type="home" color="" size="14" /> -->
          <view class="font-bold w-24 whitespace-nowrap">地区</view>
          <view class="flex-1 text-gray-500">
            {{ "YYYYYYYYYYYYY yyyyyyyyyyy" }}
          </view>
        </view>
        <view class="flex items-start gap-1">
          <!-- <uni-icons type="home" color="" size="14" /> -->
          <view class="font-bold w-24">经营范围</view>
          <view class="flex-1 text-gray-500">{{
            "Mens bags, School bags, Leather bags, Outdoorbags, Women bags, Child bags, Wallet, Laptopbags, Luggage"
          }}</view>
        </view>
      </view>
    </view>
    <view class="bg-white rounded-md px-1 py-2 space-y-2 pl-4">
      <view class="text-lg font-bold">工厂展厅</view>
      <view class="flex flex-col gap-3">
        <view class="text-gray-500 text-sm">暂无</view>
      </view>
    </view>
    <view class="bg-white rounded-md px-1 py-2 space-y-2 pl-4">
      <view class="text-lg font-bold">店铺介绍</view>
      <view class="flex flex-col gap-3">
        <view class="text-gray-500 text-sm">暂无</view>
      </view>
    </view>
  </view>
  <view
    class="flex items-center justify-between fixed bottom-0 w-full h-20 bg-white shadow-lg px-4"
  >
    <view class="flex h-10">
      <view class="flex flex-col items-center">
        <uni-icons type="star" color="text-primary" size="24" />
        <text class="text-sm">关注</text>
      </view>
    </view>
    <view
      class="rounded-full text-base bg-purple-100 text-primary px-4 h-10 flex items-center justify-center"
    >
      产品目录
    </view>
    <view class="flex">
      <view
        class="rounded-l-full text-base bg-purple-100 text-primary px-4 h-10 flex items-center justify-center"
      >
        打电话
      </view>
      <view
        @click="navigateToChat()"
        class="rounded-r-full text-base text-white bg-primary px-4 h-10 flex items-center justify-center"
      >
        <text>联系商家</text>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { onLoad } from "@dcloudio/uni-app";
import SearchNavBar from "../search/search-nav-bar.vue";
import { reactive, ref } from "vue";
// 获取屏幕边界到安全区域距离
const { safeAreaInsets } = uni.getSystemInfoSync();

const storeId = ref<number>();

onLoad((options) => {
  storeId.value = options!!.storeId;
});

const value = ref(3);
const keyWord = ref("");

const store = reactive({
  name: "XXXXXXXX有限公司",
  country: "中国",
  area: "广东省",
});

function navigateToChat() {
  uni.navigateTo({ url: `/pages/message/chat/chat?storeId=${storeId.value}` });
}
</script>

<style lang="scss" scoped></style>
