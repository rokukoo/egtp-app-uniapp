<template>
  <view class="new-request overflow-hidden">
    <nut-form
      :model-value="newRequestForm"
      :rules="{
        title: [{ required: true, message: '请填写标题' }],
        desc: [{ required: true, message: '请填写简介' }],
        country: [{ required: true, message: '请填写所在国家' }],
        duration: [{ required: true, message: '请选择发布时长' }],
        coverImage: [{ required: true, message: '请选择需求图片' }],
      }"
    >
      <nut-form-item label="标题" prop="title">
        <nut-input
          v-model="newRequestForm.title"
          placeholder="请输入需求标题"
          type="text"
          :border="false"
        />
      </nut-form-item>
      <nut-form-item label="简介" prop="desc">
        <nut-input
          v-model="newRequestForm.desc"
          placeholder="请输入需求简介"
          type="text"
          :border="false"
        />
      </nut-form-item>
      <nut-form-item label="所在国家" prop="country">
        <nut-input
          v-model="newRequestForm.country"
          placeholder="请输入所在国家"
          type="text"
          :border="false"
        />
      </nut-form-item>
      <nut-form-item label="发布时长">
        <nut-range
          :min="1"
          :max="60"
          v-model="newRequestForm.duration"
        ></nut-range>
      </nut-form-item>
      <nut-form-item label="需求图片">
        <nut-uploader
          :url="uploadUrl"
          accept="image"
          v-model:file-list="newRequestForm.coverImage"
          maximum="3"
          multiple
        >
        </nut-uploader>
      </nut-form-item>
      <nut-form-item label="需求详情" prop="content">
        <nut-textarea
          v-model="newRequestForm.content"
          placeholder="请输入需求详情"
          limit-show
          max-length="100"
          type="text"
        />
      </nut-form-item>
      <view class="flex justify-end gap-4 my-2">
        <nut-button @click="reset"> 重置表单 </nut-button>
        <nut-button
          type="primary"
          class="mr-16"
          @click="submit"
          :loading="isSubmitting"
        >
          <view class="flex items-center gap-1">
            <uni-icons
              type="paperplane-filled"
              size="18"
              color="#fff"
              v-show="!isSubmitting"
            ></uni-icons>
            <text v-if="!isSubmitting">提交需求</text>
            <text v-else>提交中..</text>
          </view>
        </nut-button>
      </view>
    </nut-form>
  </view>
</template>

<script lang="ts" setup>
import { reactive, ref, toRefs } from "vue";

const uploadUrl = "http://localhost:8080/system/oss/upload";
const props = defineProps();

const isSubmitting = ref(false);

const newRequestForm = reactive<{
  title: string;
  desc: string;
  content: string;
  coverImage: string[];
  country: string;
  duration: number;
}>({
  title: "",
  desc: "",
  content: "",
  coverImage: [],
  country: "",
  duration: 7,
});

const refs = toRefs(newRequestForm);

const reset = () => {};

const submit = () => {
  console.log(refs.coverImage.value);
  isSubmitting.value = true;
  setTimeout(() => {
    isSubmitting.value = false;
  }, 2000);
};
</script>

<style lang="scss" scoped></style>
