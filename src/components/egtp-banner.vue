<template>
  <view class="egtp-banner relative w-full h-full rounded-md overflow-hidden">
    <nut-swiper
      :init-page="page"
      :pagination-visible="true"
      pagination-color="#426543"
      auto-play="3000"
    >
      <nut-swiper-item v-for="item in list" :key="item.id">
        <image
          class="w-full h-full"
          :src="item.coverImage"
          mode="center"
          alt=""
        />
      </nut-swiper-item>
    </nut-swiper>
  </view>
</template>

<script lang="ts" setup>
import { getBannerApi } from "@/services/banner";
import { useLangStore } from "@/stores/modules/lang";
import type { BannerItem } from "@/types/banner";
import { onLoad } from "@dcloudio/uni-app";
import { onMounted, reactive, ref, toRefs } from "vue";

const { langId } = useLangStore();

const props = defineProps<{
  type: string;
}>();

const state = reactive({
  page: 1,
  list: [] as BannerItem[],
});

const { page, list } = toRefs(state);

const getBannerData = async () => {
  const res = await getBannerApi({ langId, type: props.type });
  list.value = res.data;
};

onLoad(() => {
  getBannerData();
});

// onMounted(() => {
//   getBannerData();
// });

onLoad((options) => {});
</script>

<style lang="scss" scoped></style>
