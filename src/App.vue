<script setup lang="ts">
import { onLaunch, onShow, onHide } from "@dcloudio/uni-app";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

onLaunch(() => {
  // 若当前页面为 TabBar 页面, 则设置 TabBar 文字为国际化内容
  uni.setTabBarItem({ index: 0, text: t("tabbar.index") });
  uni.setTabBarItem({ index: 1, text: t("tabbar.category") });
  uni.setTabBarItem({ index: 2, text: t("tabbar.logistics") });
  uni.setTabBarItem({ index: 3, text: t("tabbar.message") });
  uni.setTabBarItem({ index: 4, text: t("tabbar.info") });
});
onShow(() => {
  // console.log("App Show");
});
onHide(() => {
  // console.log("App Hide");
});
</script>

<style lang="scss">
@import "nutui-uniapp/styles/index";
</style>
