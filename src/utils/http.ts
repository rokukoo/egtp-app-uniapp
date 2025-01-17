import { useLoginStore, useUserStore } from "@/stores";

export const Method = {
  GET: "GET" as "GET",
  POST: "POST" as "POST",
  PUT: "PUT" as "PUT",
  DELETE: "DELETE" as "DELETE",
};

// const baseURL = "https://pcapi-xiaotuxian-front-devtest.itheima.net";
export const baseURL = "http://localhost:8080/api/v1";

// 创建拦截器
const httpInterceptor = {
  // 拦截前触发
  invoke(options: UniApp.RequestOptions) {
    // 1. 非 http 开头需拼接地址
    if (!options.url.startsWith("http")) {
      options.url = baseURL + options.url;
    }
    // 2. 请求超时, 默认 60s
    options.timeout = 10 * 1000;
    // TODO: 3. 添加小程序端请求头标识
    options.header = {
      "source-client": "miniapp",
      ...options.header,
    };

    // 4. 添加 token 请求头标识
    const userStore = useUserStore();
    const token = userStore.profile?.token;
    if (token) {
      options.header.Authorization = `Bearer ${token}`;
    }
  },
};

// 拦截 request 请求
uni.addInterceptor("request", httpInterceptor);
// 拦截 uploadFile 文件上传
uni.addInterceptor("uploadFile", httpInterceptor);

/**
 * 请求函数
 * @param UniApp.RequestOptions
 * @returns Promise
 *  1. 返回 Promise 对象，用于处理返回值类型
 *  2. 获取数据成功
 *    2.1 提取核心数据 res.data
 *    2.2 添加类型，支持泛型
 *  3. 获取数据失败
 *    3.1 401错误  -> 清理用户信息，跳转到登录页
 *    3.2 其他错误 -> 根据后端错误信息轻提示
 *    3.3 网络错误 -> 提示用户换网络
 */
export type SimpleResult<T> = {
  code: number;
  msg: string;
  data: T;
  total?: string;
};

export type PageResult<T> = {
  code: number;
  msg: string;
  rows: T;
  total?: string;
};

type Result<T> = SimpleResult<T> & PageResult<T>;

// 2.2 添加类型，支持泛型
export const http = <T>(options: UniApp.RequestOptions) => {
  // 1. 返回 Promise 对象
  return new Promise<Result<T>>((resolve, reject) => {
    uni.request({
      ...options,
      // 响应成功
      success(res) {
        // @ts-ignore
        res.statusCode = res.data.code;
        // 状态码 2xx，参考 axios 的设计
        if (res.statusCode >= 200 && res.statusCode < 300) {
          // 2.1 提取核心数据 res.data
          resolve(res.data as Result<T>);
        } else if (res.statusCode === 401) {
          // 401错误  -> 清理用户信息，跳转到登录页
          const userStore = useUserStore();
          userStore.clearProfile();
          const loginStore = useLoginStore();
          loginStore.setLogined(false);
          uni.switchTab({ url: "/pages/info/info" });
          reject(res);
        } else {
          // 其他错误 -> 根据后端错误信息轻提示
          uni.showToast({
            icon: "none",
            title: (res.data as Result<T>).msg || "请求错误",
          });
          reject(res);
        }
      },
      // 响应失败
      fail(err) {
        uni.showToast({
          icon: "none",
          title: "网络错误，换个网络试试",
        });
        reject(err);
      },
    });
  });
};
