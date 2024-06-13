<template>
  <view
    :style="{ paddingTop: safeAreaInsets?.top + 'px' }"
    class="space-y-3 pb-36"
  >
    <search-nav-bar v-model:keyWord="keyWord" />
    <view class="h-72">
      <egtp-swiper
        class="h-72"
        :list="[{ type: 0, hrefUrl: '', imgUrl: product?.coverImage!!, id: '1' }]"
      />
    </view>

    <!-- card wrapper -->
    <view class="bg-white rounded-md px-4 py-2 space-y-2 mx-2">
      <!-- price -->
      <view class="flex items-center justify-between gap-1">
        <!-- price - 1 -->
        <view>
          <view>
            <text class="text-primary font-bold">￥</text>
            <text class="text-primary text-xl font-bold">32.00</text>
          </view>
          <view class="text-gray-400 text-sm">1-499 件</view>
        </view>
        <!-- price - 2 -->
        <view>
          <view>
            <text class="text-primary font-bold">￥</text>
            <text class="text-primary text-xl font-bold">32.00</text>
          </view>
          <view class="text-gray-400">500-1999 件</view>
        </view>
        <!-- price - 3 -->
        <view>
          <view>
            <text class="text-primary font-bold">￥</text>
            <text class="text-primary text-xl font-bold">32.00</text>
          </view>
          <view class="text-gray-400">≥2000 件</view>
        </view>
      </view>
      <!-- name -->
      <view class="flex gap-1 flex-wrap !mt-4">
        <nut-tag custom-color="#3b3187">热门产品</nut-tag>
        <nut-tag custom-color="#FA2400" plain>活动优惠</nut-tag>
        <!-- <text class="text-lg font-bold">{{ product?.name }}</text> -->
        <text class="text-lg font-bold">{{
          "无纺布袋现货批发环保购物袋覆膜服装袋手提袋立体袋加厚广告logo"
        }}</text>
      </view>

      <view class="text-xs text-gray-400 flex gap-2 items-center !mt-1">
        <view>
          <text>浏览量:</text>
          <text>{{ "1000+" }}</text>
        </view>
        <view>
          <text>成交量:</text>
          <text>{{ "100+" }}</text>
        </view>
      </view>
    </view>

    <!-- <view class="bg-white rounded-md px-1 py-2 space-y-2 pl-4 mx-2">
      <view class="text-lg font-bold">产品信息</view>
      <view class="flex flex-col gap-3">
        <view class="text-gray-500 text-sm">暂无</view>
      </view>
    </view> -->

    <view class="bg-white rounded-md px-1 py-2 space-y-2 pl-4 w-full mx-2">
      <view class="flex flex-col gap-3 text-sm">
        <view class="flex items-center gap-1">
          <!-- <uni-icons type="home" color="" size="14" /> -->
          <view class="w-16 text-gray-500">发货地</view>
          <view class="flex-1">{{ "中国杭州" }}</view>
        </view>
        <view class="flex items-center gap-1">
          <!-- <uni-icons type="home" color="" size="14" /> -->
          <view class="w-16 text-gray-500">服务</view>
          <view class="flex-1">{{
            "晚发必赔 · 7天无理由退货 · 极速退款"
          }}</view>
        </view>
        <!-- <view class="flex items-center gap-1">
          <view class="font-bold w-16">规格</view>
          <view class="flex-1 text-gray-500">{{ "+86 13208030926" }}</view>
        </view> -->
      </view>
    </view>

    <view class="bg-white rounded-md px-1 py-2 space-y-2 pl-4 mx-2">
      <view class="text-lg font-bold">店铺信息</view>
      <view class="flex flex-col gap-3">
        <view class="text-gray-500 text-sm">暂无</view>
      </view>
    </view>

    <view class="bg-white rounded-md px-1 py-2 space-y-2 pl-4 mx-2">
      <view class="text-lg font-bold">商品评价</view>
      <view class="flex flex-col gap-3">
        <view class="text-gray-500 text-sm">暂无</view>
      </view>
    </view>

    <view class="bg-white rounded-md px-1 py-2 space-y-2 pl-4 mx-2">
      <view class="text-lg font-bold">其他推荐</view>
      <view class="flex flex-col gap-3">
        <view class="text-gray-500 text-sm">暂无</view>
      </view>
    </view>

    <view class="my-2 flex justify-center">
      <view class="w-1/2 text-sm text-gray-400 flex items-center">
        <view class="flex-1 bg-gray-400" style="height: 1px"></view>
        <view class="mx-4">商品详情</view>
        <view class="flex-1 bg-gray-400" style="height: 1px"></view>
      </view>
    </view>

    <view> {{ product?.details }} </view>
  </view>
  <view
    class="flex items-center justify-between fixed bottom-0 w-full h-20 bg-white shadow-lg px-4"
  >
    <view class="flex h-10 gap-3">
      <view class="flex flex-col items-center">
        <uni-icons type="shop" color="#3b3187" size="24" />
        <text class="text-sm text-primary">店铺</text>
      </view>
      <view class="flex flex-col items-center">
        <uni-icons type="star" color="#333" size="24" />
        <text class="text-sm text-[#333]">收藏</text>
      </view>
      <view class="flex flex-col items-center">
        <uni-icons type="staff" color="#333" size="24" />
        <text class="text-sm text-[#333]">客服</text>
      </view>
    </view>
    <view class="flex h-10">
      <view
        class="rounded-l-full text-base bg-purple-100 text-primary px-4 h-10 flex items-center justify-center"
      >
        立即下单
      </view>
      <view
        @click=""
        class="rounded-r-full text-base text-white bg-primary px-4 h-10 flex items-center justify-center"
      >
        <text>联系商家</text>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import type { Product } from "@/types/product";
import { onLoad } from "@dcloudio/uni-app";
import { getProductByIdApi } from "@/services/product";
import searchNavBar from "../search/search-nav-bar.vue";

const { safeAreaInsets } = uni.getSystemInfoSync();

const product = ref<Product>();
const keyWord = ref("");

const getProductData = async (productId: string) => {
  const res = await getProductByIdApi(productId);
  // @ts-ignore
  product.value = res.data;
};

onLoad((options) => {
  const productId = options!!.productId;
  getProductData(productId);
});
</script>

<style lang="scss" scoped></style>
