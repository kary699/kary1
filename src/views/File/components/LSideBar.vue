<template>
    <div class="max-w-250 min-w-250 bg-main-white0 b-r">
        <div class="fs-13 text-grey m-b-15 cursor-pointer link-title p-h-50 p-v-15 m-t-20">
            <Icon type="md-ionic" class="fs-18 v-a-middle" />
            <span class="m-l-5 v-a-middle">最近打开</span>
        </div>
        <div class="fs-13 text-grey m-b-15 cursor-pointer link-title p-h-50 p-b-15">
            <Icon type="ios-bookmark" class="fs-18 v-a-middle" />
            <span class="m-l-5 v-a-middle">收藏</span>
        </div>
        <div class="p-b-15">
            <div class="fs-13 text-grey m-b-15 cursor-pointer link-title p-h-50">
                <div class="d-inline-block" @click="handleSpaceShow()">
                    <Icon type="logo-buffer" class="fs-18 v-a-middle" />
                    <span class="m-l-5 v-a-middle">共享空间</span>
                </div>
                <Icon type="md-add-circle" class="d-inline-block m-l-50 fs-18 v-a-middle" />
            </div>
            <ul class="shadow-grey-inset p-l-80 fs-13 h-300 o-y-scroll scroll-css hide open-panel" :class="{'show': ifShow}">
                <li class="text-grey p-v-15 cursor-pointer link-title"
                    v-for="(item, index) in groupData" :key="index">
                    <p class="d-inline-block  v-a-middle w-100 text-hidden">{{item.groupName}}</p>
                    <Icon type="ios-settings" class="m-l-20 fs-18 v-a-middle" />
                </li>
            </ul>
        </div>
        <div class="fs-13 text-grey m-b-15 cursor-pointer link-title p-h-50 p-b-15">
            <Icon type="ios-trash" class="fs-18 v-a-middle" />
            <span class="m-l-5 v-a-middle">回收站</span>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            ifShow: false,
            groupData: [
                {
                    groupName: '第一空间,这个名字设置超长一点会怎么样呢'
                },
                {
                    groupName: "测试空间"
                },
                {
                    groupName: "测试空间"
                },
                {
                    groupName: "测试空间"
                },
                {
                    groupName: "测试空间"
                },
                {
                    groupName: "测试空间"
                },
                {
                    groupName: "测试空间"
                },
                {
                    groupName: "测试空间"
                },
                {
                    groupName: "测试空间"
                },
                {
                    groupName: "测试空间"
                },
                {
                    groupName: "测试空间"
                },
                {
                    groupName: "测试空间"
                },
                {
                    groupName: "测试空间"
                },
                {
                    groupName: "测试空间"
                },
                {
                    groupName: "测试空间"
                }
            ]
        }
    },
    methods: {
        handleSpaceShow() {
            this.ifShow = !this.ifShow
        }
    }
}
</script>

<style lang="scss" scoped>
.hide {
    transform: translateY(-100%);
}
.show {
    transform: translateY(0%);
}
</style>