<template>
  <view
    :style="{ paddingTop: safeAreaInsets?.top + 'px' }"
    class="h-full overflow-hidden pb-20"
  >
    <view class="w-full border-b shadow">
      <search-nav-bar v-model:keyWord="keyWord" />
    </view>

    <view class="h-full pb-20 overflow-scroll px-2">
      <scroll-view scroll-y>
        <view class="!mb-3">
          <egtp-swiper :list="[]" />
        </view>

        <view class="bg-white rounded-md py-2 px-3 space-y-2 mb-3">
          <view class="text-lg font-bold">{{ store.name }}</view>

          <view class="flex gap-2 items-center">
            <nut-tag round custom-color="#3b3187">官方认证</nut-tag>
            <nut-tag round plain>物流商</nut-tag>
            <view class="text-xs text-gray-500">10 年</view>
          </view>

          <view class="flex items-center justify-between">
            <view class="flex items-center gap-1 flex-nowrap">
              <uni-icons type="location" size="18" />
              <view
                class="text-xs text-gray-500 w-72 text-ellipsis overflow-hidden"
              >
                ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZ
              </view>
            </view>
            <view> <uni-icons type="right" color="" size="12" /> </view>
          </view>
        </view>

        <view class="bg-white rounded-md px-1 py-2 space-y-2 pl-4 mb-3">
          <view class="text-lg font-bold">物流信息</view>
          <view class="flex flex-col gap-3">
            <view class="text-gray-500 text-sm">暂无</view>
          </view>
        </view>

        <view class="bg-white rounded-md px-1 py-2 space-y-2 pl-4 w-full mb-3">
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
              <view class="flex-1 text-gray-500">{{
                "tigernu@gmail.com"
              }}</view>
            </view>
            <view class="flex items-start gap-1">
              <!-- <uni-icons type="home" color="" size="14" /> -->
              <view class="font-bold w-24">物流范围</view>
              <view class="flex-1 text-gray-500">{{
                "Mens bags, School bags, Leather bags, Outdoorbags, Women bags, Child bags, Wallet, Laptopbags, Luggage"
              }}</view>
            </view>
          </view>
        </view>

        <view class="bg-white rounded-md px-1 py-2 space-y-2 pl-4 mb-3">
          <view class="text-lg font-bold">物流介绍</view>
          <view class="flex flex-col gap-3">
            <view class="text-gray-500 text-sm">暂无</view>
          </view>
        </view>
      </scroll-view>
    </view>
  </view>

  <view
    class="flex items-center justify-between fixed bottom-0 w-full h-20 bg-white px-4 shadow-lg border-t"
  >
    <view class="flex h-10">
      <view class="flex flex-col items-center justify-center">
        <uni-icons type="star" color="text-primary" size="24" />
        <!-- <text class="text-sm">关注</text> -->
      </view>
    </view>
    <view
      class="rounded-full text-base bg-purple-100 text-primary px-4 h-10 flex items-center justify-center"
    >
      物流目录
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
        <text>联系物流</text>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import SearchNavBar from "../../search/search-nav-bar.vue";
import { ref, reactive } from "vue";

const { safeAreaInsets } = uni.getSystemInfoSync();

const keyWord = ref("");

const store = reactive({
  name: "XXXXXXXX物流有限公司",
  country: "中国",
  area: "广东省",
});

function navigateToChat() {
  uni.navigateTo({ url: "/pages/message/chat/chat" });
}
</script>

<style lang="scss" scoped></style>
