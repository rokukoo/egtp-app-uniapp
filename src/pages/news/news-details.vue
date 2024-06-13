<template>
  <view class="news-details">
    <!-- 详情区域 -->
    <view class="space-y-2 px-2 pb-36">
      <!-- 图片包装 -->
      <view class="overflow-hidden rounded">
        <!-- 图片区域 -->
        <image
          :src="details?.coverImage"
          class="h-40 w-full"
          mode="scaleToFill"
        />
      </view>
      <!-- 详情信息区域 -->
      <view class="bg-white rounded-md py-2 px-3 space-y-2">
        <view class="flex items-center gap-1">
          <nut-tag custom-color="#3b3187">精选</nut-tag>
          <view class="text-lg font-bold">{{ details?.title }}</view>
        </view>

        <view class="flex gap-2 items-center">
          <view class="text-gray-500">{{ details?.abstraction }}</view>
          <!-- <nut-tag round type="primary">品牌店铺</nut-tag> -->
        </view>

        <view class="flex items-center justify-between">
          <view class="flex gap-2 items-center flex-nowrap whitespace-nowrap">
            <view class="text-xs text-gray-500">
              浏览量: {{ details?.viewCount }}
            </view>
            <view class="text-xs text-gray-500">点赞数: {{ 0 }}</view>
            <view class="text-xs text-gray-500">
              国家: {{ details?.country }}
            </view>
          </view>
          <view>
            <uni-icons type="right" color="" size="12" />
          </view>
        </view>
      </view>

      <view class="bg-white rounded-md px-1 pt-2 pb-4 space-y-2 pl-4">
        <view class="text-lg font-bold">新闻信息</view>
        <view class="flex flex-col gap-1 text-sm">
          <view class="flex items-center gap-1">
            <view class="font-bold w-24">发布时间</view>
            <view class="flex-1 text-gray-500">
              {{ details?.publishTime }}
            </view>
          </view>
          <view class="flex items-center gap-1">
            <view class="font-bold w-24">发布人</view>
            <view class="flex-1 text-gray-500">
              {{ "暂无" }}
            </view>
          </view>
          <view class="flex items-center gap-1">
            <view class="font-bold w-24">最后修改时间</view>
            <view class="flex-1 text-gray-500">
              {{ details?.publishTime }}
            </view>
          </view>
        </view>
      </view>

      <view class="bg-white rounded-md px-1 py-2 space-y-2 pl-4 h-96">
        <view class="text-lg font-bold">新闻详情</view>
        <view class="flex flex-col gap-3">
          <view class="text-gray-500 text-sm text-ellipsis overflow-hidden">
            {{ details?.content }}
          </view>
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
          点赞
        </view>
        <view
          class="rounded-r-full text-base text-white bg-primary px-4 h-10 flex items-center justify-center"
        >
          <text>评论</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import type { News } from "@/types/news";
import { onLoad } from "@dcloudio/uni-app";
import { ref, reactive } from "vue";

const details = ref<News>();

onLoad((options) => {
  if (!options!!.news) {
    uni.navigateBack();
    return;
  }
  const _details = JSON.parse(decodeURIComponent(options!!.news)) as News;
  console.log(_details);
  details.value = _details;
});
</script>

<style lang="scss" scoped></style>
