<template>
  <view
    class="search-result"
    :style="{ paddingTop: safeAreaInsets?.top + 'px' }"
  >
    <search-nav-bar v-model:keyWord="keyWord" />
    <view class="px-3">
      <nut-tabs
        v-model="state.tabValue"
        :animated-time="0"
        @change="handleTabChange"
      >
        <nut-tab-pane
          title="商品"
          pane-key="1"
          :custom-style="{ background: '#f6f6f6', padding: '10px 0' }"
        >
          <nut-menu custom-class="mb-2 relative">
            <nut-menu-item v-model="state2.value1" :options="state2.options1" />
            <nut-menu-item
              v-model="state2.value2"
              @change="handleChange"
              :options="state2.options2"
            />
          </nut-menu>
          <egtp-product-list :list="products" />
        </nut-tab-pane>
        <nut-tab-pane
          title="商家"
          pane-key="2"
          :custom-style="{ background: '#f6f6f6', padding: '10px 0' }"
        >
          <egtp-store-list :list="stores" />
        </nut-tab-pane>
        <nut-tab-pane
          title="物流"
          pane-key="3"
          :custom-style="{ background: '#f6f6f6', padding: '10px 0' }"
        >
          <egtp-logistics-list :list="logistics" />
        </nut-tab-pane>
      </nut-tabs>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { onLoad } from "@dcloudio/uni-app";
import SearchNavBar from "./search-nav-bar.vue";
import { ref, reactive } from "vue";
import ProductCard from "../index/components/product-list.vue";
import EgtpStore from "../index/components/egtp-store.vue";
import HotLogistics from "../logistics/hot-logistics.vue";
import { getProductListApi } from "@/services/product";
import { getStoreListApi } from "@/services/store";
import type { Store } from "@/types/store";
import type { Product } from "@/types/product";

const products = ref<Product[]>([]);
const stores = ref<Store[]>([]);
const logistics = ref<Store[]>([]);

const state = reactive({
  tabValue: "1",
});

// 获取屏幕边界到安全区域距离
const { safeAreaInsets } = uni.getSystemInfoSync();

const props = defineProps();

const keyWord = ref("");

const state2 = reactive({
  options1: [
    { text: "全部商品", value: 0 },
    { text: "新款商品", value: 1 },
    { text: "活动商品", value: 2 },
  ],
  options2: [
    { text: "默认排序", value: "a" },
    { text: "好评排序", value: "b" },
    { text: "销量排序", value: "c" },
  ],
  value1: 0,
  value2: "a",
});

const getProductData = async () => {
  const res = await getProductListApi({ name: keyWord.value });
  products.value = res.rows;
};

onLoad((options) => {
  keyWord.value = options!!.keyWord;
  console.log(`User search: ${keyWord.value}`);
  getProductData();
});

const getStoreData = async () => {
  const res = await getStoreListApi({ name: keyWord.value });
  console.log(res);
  stores.value = res.rows;
};

const handleTabChange = (options: any) => {
  if (options.paneKey == "1") {
    getProductData();
  } else if (options.paneKey == "2") {
    getStoreData();
  } else if (options.paneKey == "3") {
    // getLogisticsData();
  }
};

const handleChange = (val: any) => {
  console.log("val", val);
};
</script>

<style lang="scss" scoped></style>
