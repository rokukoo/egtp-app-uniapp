import { defineStore } from 'pinia'
import { ref } from 'vue'

// 定义 Store
export const useUserStore = defineStore(
    'user',
    () => {
        // 会员信息
        const profile = ref<any>()

        // 保存会员信息，登录时使用
        const setProfile = (value: any) => {
            profile.value = value
        }

        // 清理会员信息，退出时使用
        const clearProfile = () => {
            profile.value = undefined
        }

        // 记得 return
        return {
            profile,
            setProfile,
            clearProfile,
        }
    },
    {
        // 配置持久化
        persist: {
            // 调整为兼容多端的API
            storage: {
                setItem(key, value) {
                    uni.setStorageSync(key, value)
                },
                getItem(key) {
                    return uni.getStorageSync(key)
                },
            },
        },
    },
)