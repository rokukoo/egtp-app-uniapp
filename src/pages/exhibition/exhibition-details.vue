<template>
  <div class="exhibition-details px-2 pb-36">
    <!-- <view class="px-3">
      <egtp-swiper :list="[]" />
    </view> -->
    <view class="space-y-2">
      <view class="overflow-hidden rounded">
        <image
          :src="details?.coverImage"
          class="h-40 w-full"
          mode="scaleToFill"
        />
      </view>

      <view class="bg-white rounded-md py-2 px-3 space-y-2">
        <view class="flex items-center gap-1">
          <nut-tag custom-color="#3b3187">进行中</nut-tag>
          <view class="text-lg font-bold">{{ details?.title }}</view>
        </view>

        <view class="flex gap-2 items-center">
          <view class="text-gray-500">{{ details?.abstraction }}</view>
          <!-- <nut-tag round type="primary">品牌店铺</nut-tag> -->
        </view>

        <view class="flex items-center justify-between">
          <view class="flex gap-2 items-center flex-nowrap whitespace-nowrap">
            <view class="text-xs text-gray-500">
              浏览量:{{ details?.viewCount }}
            </view>
            <view class="text-xs text-gray-500">点赞数:{{ 0 }}</view>
          </view>
          <view>
            <uni-icons type="right" color="" size="12" />
          </view>
        </view>
        <!-- 地址信息 - begin -->
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
        <!-- 地址信息 - end -->
      </view>

      <view class="bg-white rounded-md px-1 py-2 space-y-2 pl-4">
        <view class="text-lg font-bold">展会详情</view>
        <view class="flex flex-col gap-1 text-sm">
          <view class="flex items-center gap-1">
            <view class="font-bold w-24">开始时间</view>
            <view class="flex-1 text-gray-500">{{ details?.startTime }}</view>
          </view>
          <view class="flex items-center gap-1">
            <view class="font-bold w-24">结束时间</view>
            <view class="flex-1 text-gray-500">{{ details?.endTime }}</view>
          </view>
        </view>
      </view>

      <view class="bg-white rounded-md px-1 py-2 space-y-2 pl-4 h-96">
        <view class="text-lg font-bold">展会介绍</view>
        <view class="flex flex-col gap-3">
          <view class="text-gray-500 text-sm">{{ details?.content }}</view>
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
      <!-- <view
        class="rounded-full text-base bg-purple-100 text-primary px-4 h-10 flex items-center justify-center"
      >
        产品目录
      </view> -->
      <view class="flex">
        <view
          class="rounded-l-full text-base bg-purple-100 text-primary px-4 h-10 flex items-center justify-center"
        >
          咨询详情
        </view>
        <view
          class="rounded-r-full text-base text-white bg-primary px-4 h-10 flex items-center justify-center"
        >
          <text>我要报名</text>
        </view>
      </view>
    </view>
  </div>
</template>

<script lang="ts" setup>
import type { Exhibition } from "@/types/exhibition";
import { onLoad } from "@dcloudio/uni-app";
import { ref, reactive } from "vue";

const details = ref<Exhibition>();

onLoad((options) => {
  if (!options!!.exhibition) {
    uni.navigateBack();
    return;
  }
  const _details = JSON.parse(options!!.exhibition) as Exhibition;
  console.log(_details);
  details.value = _details;
});
</script>

<style lang="scss" scoped></style>
