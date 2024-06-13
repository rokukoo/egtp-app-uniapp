<script setup lang="ts">
import { ref, reactive } from "vue";
// 获取屏幕边界到安全区域距离
const { safeAreaInsets } = uni.getSystemInfoSync();

import { getCodeImgApi } from "@/services/login";

const loginData = reactive({
  username: "",
  password: "",
  agreement: false,
  code: "",
  uuid: "",
});

const codeImgUrl = ref("");

const getCodeData = async () => {
  getCodeImgApi()
    .then(({ data }) => {
      console.log(data);
      codeImgUrl.value = data.img;
      loginData.uuid = data.uuid;
    })
    .catch(() => {
      setTimeout(getCodeData, 500);
      isSubmitting.value = false;
    });
  isSubmitting.value = false;
};

onLoad(() => {
  getCodeData();
});

// const { account, password };

import { useLoginStore } from "@/stores";
import { onLoad } from "@dcloudio/uni-app";
const loginStore = useLoginStore();
const isSubmitting = ref(false);

const submit = async () => {
  if (!loginData.agreement) {
    uni.showToast({
      title: "请先阅读并同意协议",
      icon: "none",
    });
    return;
  }
  isSubmitting.value = true;
  // 模拟登录, 制造延迟
  setTimeout(async () => {
    loginStore
      .login(
        loginData.username,
        loginData.password,
        loginData.code,
        loginData.uuid
      )
      .then((res) => {
        if (!res.success) {
          getCodeData();
        } else {
          uni.showToast({
            title: "登录成功",
            icon: "success",
          });
        }
        isSubmitting.value = false;
      })
      .catch(() => {
        getCodeData();
        isSubmitting.value = false;
      });
  }, 500);
};
</script>

<template>
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
              v-model="loginData.username"
              class="nut-input-text"
              placeholder="账号/手机/邮箱"
              type="text"
              custom-class="text-black"
            ></nut-input>
          </nut-form-item>
          <nut-form-item label="密码" :required="true">
            <nut-input
              v-model="loginData.password"
              class="nut-input-text"
              placeholder="请输入密码"
              type="password"
              custom-class="text-black"
            />
          </nut-form-item>
          <nut-form-item label="验证码" :required="true">
            <view class="flex items-center justify-between gap-2 h-8">
              <nut-input
                v-model="loginData.code"
                class="nut-input-text"
                placeholder="请输入验证码"
                type="text"
                custom-class="text-black"
              />
              <image
                class="h-full w-full"
                :src="codeImgUrl"
                mode="aspectFit"
                @click="getCodeData"
              />
            </view>
          </nut-form-item>
          <view :style="{ padding: 'var(--nut-cell-padding, 12rpx 32rpx)' }">
            <nut-checkbox
              v-model="loginData.agreement"
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
          <view :style="{ padding: 'var(--nut-cell-padding, 12rpx 32rpx)' }">
            <nut-button
              custom-style="width: 100%"
              type="primary"
              @click="submit"
              :loading="isSubmitting"
            >
              <text v-if="isSubmitting">登录中</text>
              <text v-else>立即登录</text>
            </nut-button>
          </view>
        </nut-form>
        <view
          class="flex justify-between text-gray-500 text-sm"
          :style="{ padding: 'var(--nut-cell-padding, 12rpx 32rpx)' }"
        >
          <text
            >没有账号?
            <text class="text-primary underline">立即注册</text></text
          >
          <text class="underline">忘记密码</text>
        </view>
        <view :style="{ padding: 'var(--nut-cell-padding, 12rpx 32rpx)' }">
          <nut-divider custom-style="margin: var(--nut-divider-margin, 24rpx 0)"
            >第三方登录</nut-divider
          >
        </view>
      </view>
      <view class="h-40">
        <!-- <egtp-banner type="login-1" /> -->
        <egtp-banner type="index-1" />
      </view>
    </view>
  </view>
</template>
