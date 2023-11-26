## 2023/11/25 pinia 版本问题

安装 pinia 时发现项目运行打印 `hasInjectionContext` 找不到的问题，去官网看了眼发现 2.1 版本的 pinia 需要 vue3.3 以上的版本支持。

https://github.com/vuejs/pinia/blob/v2/packages/pinia/CHANGELOG.md

为了避免其他问题出现, 降低 pinia 版本至 `2.0.36`。
