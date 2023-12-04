<script lang="ts" setup>
import { ref, reactive } from "vue";
// 获取屏幕边界到安全区域距离
const { safeAreaInsets } = uni.getSystemInfoSync();

import { getHomeBannerApi } from "@/services/home";
import { onLoad } from "@dcloudio/uni-app";
import type { BannerItem } from "@/types/home";

const isLogin = ref(false);
const agreement = ref(false);

const getHomeBannerData = async () => {
  const res = await getHomeBannerApi();
  console.log(res);
  bannerList.value = res.result;
};

const bannerList = ref<BannerItem[]>([]);

onLoad(() => {
  getHomeBannerData();
});

const basicData = reactive({
  account: "",
  password: "",
});
</script>

<template>
  <view class="info h-screen">
    <template v-if="!isLogin">
      <view
        class="h-full bg-gradient-to-br from-purple-200 from-10% via-sky-100 to-purple-50 flex flex-col"
      >
        <view class="h-52 pt-16 pb-8 px-6 space-y-4">
          <view class="text-primary font-bold" :style="{ fontSize: '64rpx' }"
            >EGTP</view
          >
          <view>
            <view
              class="text-md text-black font-bold"
              :style="{ fontSize: '42rpx' }"
              >点击下方按钮进行登录/注册</view
            >
            <view class="text-gray-700">登录体验更多福利</view>
          </view>
        </view>
        <view
          class="bg-white rounded-2xl flex-1 px-4 flex flex-col justify-between pt-3 pb-4"
        >
          <view class="action-panel">
            <nut-form>
              <nut-form-item label="账号" :required="true">
                <!-- TODO: 添加图标 -->
                <!-- <template #label>slot label</template> -->
                <nut-input
                  v-model="basicData.account"
                  class="nut-input-text"
                  placeholder="账号/手机/邮箱"
                  type="text"
                ></nut-input>
              </nut-form-item>
              <nut-form-item label="密码" :required="true">
                <nut-input
                  v-model="basicData.password"
                  class="nut-input-text"
                  placeholder="请输入密码"
                  type="password"
                />
              </nut-form-item>
              <view
                :style="{ padding: 'var(--nut-cell-padding, 12rpx 32rpx)' }"
              >
                <nut-checkbox
                  v-model="agreement"
                  label="复选框"
                  custom-style="align-items: start"
                >
                  <view>
                    <text class="text-gray-500">我同意</text>
                    <text class="text-black">《EGTP服务条款》</text>
                    <text class="text-black">《隐私条款》</text>
                    <text class="text-black">《EGTP平台服务协议》</text>
                  </view>
                </nut-checkbox>
              </view>
              <view
                :style="{ padding: 'var(--nut-cell-padding, 12rpx 32rpx)' }"
              >
                <nut-button custom-style="width: 100%" type="primary"
                  >立即登录</nut-button
                >
              </view>
            </nut-form>
            <view
              class="flex justify-between text-gray-500 text-sm"
              :style="{ padding: 'var(--nut-cell-padding, 12rpx 32rpx)' }"
            >
              <text>没有账号? <text class="text-primary">立即注册</text></text>
              <text>忘记密码</text>
            </view>
            <view :style="{ padding: 'var(--nut-cell-padding, 12rpx 32rpx)' }">
              <nut-divider
                custom-style="margin: var(--nut-divider-margin, 24rpx 0)"
                >第三方登录</nut-divider
              >
            </view>
          </view>
          <view>
            <egtp-swiper :list="bannerList" />
          </view>
        </view>
      </view>
    </template>
    <template v-else>
      <view :style="{ paddingTop: safeAreaInsets?.top + 'px' }">
        <nut-cell title="我是标题" desc="描述文字"></nut-cell>
        <nut-button type="primary">Primary</nut-button>
      </view>
    </template>
  </view>
</template>

<style lang="scss" scoped></style>
