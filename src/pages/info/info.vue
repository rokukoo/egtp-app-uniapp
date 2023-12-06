<script lang="ts" setup>
import NotLoginPage from "./not-login-page.vue";
import LoginedPage from "./logined-page.vue";
import { ref, reactive } from "vue";

import { useLoginStore } from "@/stores";

const login = useLoginStore();
</script>

<template>
  <view class="info">
    <not-login-page v-if="!login.logined" />
    <logined-page v-else />
  </view>
</template>

<style lang="scss" scoped></style>
