<template>
    <div class="h-90 flex j-between a-center p-h-50">
        <div class="text-title">
            <h2>张三的项目空间</h2>
            <div class="m-t-5 text-grey">
                <router-link to="#">
                    <span class="m-r-10 bold text-black">看板</span>
                </router-link>
                <router-link to="#">
                    <span class="m-r-10 bold">时间线</span>
                </router-link>
                <router-link to="#">
                    <span class="m-r-10 bold">文档库</span>
                </router-link>
            </div>
        </div>
        <div class="flex j-between a-center">
            <div class="flex j-started">
                <div class="w-40 h-40 o-hidden b-round border b-3 b-grey m-l-n-10"
                     v-for="(item, index) in userList" :key="index">
                    <img :src="item.imgUrl" class="w-full h-full">
                </div>
            </div>
            <div class="m-h-25 cursor-pointer">
                <Icon type="ios-stats-outline" class="fs-20" />
                <span>进度</span>
            </div>
            <div class="cursor-pointer">
                <Icon  type="ios-settings-outline"  class="fs-20" />
                <span>设置</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            userList: [
                {
                    imgUrl: 'https://avatar.smcdn.cn/6hpcFLHt0XYWitFH/image.jpg!avatar'
                },
                {
                    imgUrl: 'https://avatar.smcdn.cn/6hpcFLHt0XYWitFH/image.jpg!avatar'
                },
                {
                    imgUrl: 'https://avatar.smcdn.cn/6hpcFLHt0XYWitFH/image.jpg!avatar'
                },
                {
                    imgUrl: 'https://avatar.smcdn.cn/6hpcFLHt0XYWitFH/image.jpg!avatar'
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.m-l-n-10 {
    margin-left: -10px;
}
</style>