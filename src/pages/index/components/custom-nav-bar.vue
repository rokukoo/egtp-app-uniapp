<template>
    <view class="nav-bar px-4 h-12 flex">
        <view class="logo flex gap-1 items-center">
            <text class="logo-image text-lg font-bold text-white">{{ t('app.title') }}</text>
            <text class="font-bold text-white">丨</text>
            <text class="text-white">{{ t('app.desc') }}</text>
        </view>
        <view class="search-bar">
            
        </view>
        <view class="">

        </view>
    </view>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t } = useI18n()
</script>

<style lang="scss">
@import '@/scss/index.scss';

.nav-bar {
    background-color: $primary-color;
}
</style>
  