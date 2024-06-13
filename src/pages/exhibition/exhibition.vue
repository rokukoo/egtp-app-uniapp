<template>
  <div class="exhibition px-2 py-2 space-y-2">
    <div class="" v-for="item in exhibitions" :key="item.id">
      <div class="flex flex-col rounded-lg overflow-hidden shadow-md">
        <image class="w-full h-40" :src="item.coverImage" mode="aspectFill" />
        <div class="px-2 py-2 flex items-center justify-between">
          <div class="space-y-1">
            <div class="flex items-center gap-1">
              <nut-tag custom-color="#3b3187">进行中</nut-tag>
              <view class="font-bold text-lg">{{ item.title }}</view>
            </div>
            <div class="flex">
              <div class="text-gray-500">{{ item.abstraction }}</div>
              <!-- <div class="text-gray-500 mx-0.5">丨</div> -->
            </div>
            <div class="flex items-center">
              <div class="text-gray-500 text-xs">
                浏览次数: {{ item.viewCount }}
              </div>
              <div class="text-gray-500 text-xs mx-0.5">丨</div>
              <div class="text-gray-500 text-xs">点赞人数: {{ 0 }}</div>
              <div class="text-gray-500 text-xs mx-0.5">丨</div>
              <div class="text-gray-500 text-xs">报名人数: {{ 0 }}</div>
            </div>
          </div>
          <div class="flex flex-col items-center gap-0.5">
            <nut-button type="primary" @click="navigateToDetails(item.id!!)"
              >查看详情</nut-button
            >
            <!-- <div class="text-gray-500 text-xs">
              浏览次数: {{ item.viewCount }}
            </div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { getExhibitionListApi } from "@/services/exhibition";
import type { Exhibition } from "@/types/exhibition";
import { onLoad } from "@dcloudio/uni-app";
import { ref, reactive } from "vue";

const exhibitions = ref<Exhibition[]>([]);

const getExhibitionData = async () => {
  const res = await getExhibitionListApi();
  console.log(res);
  const rows = res.rows;
  exhibitions.value = rows;
};

onLoad(() => {
  getExhibitionData();
});

const navigateToDetails = (id: string) => {
  const exhibition = JSON.stringify(
    exhibitions.value.find((item) => item.id === id)
  );
  uni.navigateTo({
    // url: `/pages/exhibition/exhibition-details?id=${id}`,
    url: `/pages/exhibition/exhibition-details?exhibition=${exhibition}`,
  });
};
</script>

<style lang="scss" scoped></style>
