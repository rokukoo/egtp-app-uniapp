import { defineStore } from 'pinia'
import { ref } from 'vue'

// 定义 Store
export const useUserStore = defineStore(
    'user',
    () => {
        // 用户信息
        const profile = ref<any>()

        // 保存用户信息，登录时使用
        const setProfile = (value: any) => {
            profile.value = value
        }

        // 清理用户信息，退出时使用
        const clearProfile = () => {
            profile.value = undefined
        }

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
                setItem(key: string, value: string) {
                    uni.setStorageSync(key, value)
                },
                getItem(key: string) {
                    return uni.getStorageSync(key)
                },
            },
        },
    },
)