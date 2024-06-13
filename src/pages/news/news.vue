<template>
  <view class="news h-full px-2 py-2">
    <!-- 新闻项目 -->
    <view
      class="item-wrapper mb-4 bg-white rounded-lg overflow-hidden shadow-md h-64 flex flex-col"
      v-for="newsItem in newsList"
      :key="newsItem.id"
    >
      <image
        class="w-full h-40"
        :src="newsItem.coverImage"
        mode="scaleToFill"
      />
      <!-- 新闻图片下方区域 -->
      <view class="px-2 py-2 flex justify-between flex-1">
        <!-- 左侧信息区域 -->
        <view class="space-y-1 flex-1">
          <!-- 标题区域 -->
          <view class="title flex items-center gap-2">
            <nut-tag custom-color="#3b3187">精选</nut-tag>
            <view class="font-bold text-lg">{{ newsItem.title }}</view>
          </view>
          <!-- 简介区域 -->
          <view class="text-gray-500">{{ newsItem.abstraction }}</view>
          <!-- 小信息区域 -->
          <view class="flex items-center">
            <view class="text-gray-500 text-xs">
              浏览次数: {{ newsItem.viewCount }}
            </view>
            <view class="text-gray-500 text-xs mx-0.5">丨</view>
            <view class="text-gray-500 text-xs">点赞人数: {{ 0 }}</view>
            <view class="text-gray-500 text-xs mx-0.5">丨</view>
            <view class="text-gray-500 text-xs">
              国家: {{ newsItem.country }}
            </view>
          </view>
        </view>
        <!-- 右侧交互区域 -->
        <view class="flex flex-col justify-center">
          <nut-button
            type="primary"
            @click="navigateToNewsDetails(newsItem.id!!)"
          >
            查看详情
          </nut-button>
        </view>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { getNewsListApi } from "@/services/news";
import type { News } from "@/types/news";
import { onLoad } from "@dcloudio/uni-app";
import { ref } from "vue";

const newsList = ref<News[]>([]);

const getExhibitionData = async () => {
  const res = await getNewsListApi();
  console.log(res);
  const rows = res.rows;
  newsList.value = rows;
};

onLoad(() => {
  getExhibitionData();
});

const navigateToNewsDetails = (id: string) => {
  let news = JSON.stringify(newsList.value.find((item) => item.id === id));
  console.log(news);
  // TODO: 传递新闻详情
  uni.navigateTo({
    url: `/pages/news/news-details?news=${encodeURIComponent(news)}`,
  });
};
</script>

<style lang="scss" scoped></style>
