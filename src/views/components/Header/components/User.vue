<template>
    <div class="absolute top-30 w-100 user-css header-panel-css shadow-grey bg-white b-r-5 m-t-20 text-center fs-12 text-grey p-h-10 zIndex-10" :class="{'header-panel-show': ifShow}">
        <div class="cursor-pointer p-10 b-b">{{name}}</div>
        <div class="cursor-pointer p-10 b-b">组织管理</div>
        <router-link to="/check" class="d-block cursor-pointer p-10 b-b">
            审批/请假
        </router-link>
        <div class="cursor-pointer p-10 b-b">考核测试</div>
        <div class="cursor-pointer p-10 b-b">项目空间</div>
        <router-link to="/sign" class="d-block cursor-pointer p-10">
            <span class="text-red">退出账号</span>
        </router-link>
    </div>
</template>

<script>
export default {
    data() {
        return {
            ifShow: false,
            name: '安和'
        }
    }
}
</script>

<style lang="scss" scoped>
.user-css {
    left: -50px;
}
</style>