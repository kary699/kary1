<template>
    <div class="w-full h-full flex j-center a-center">
        <div class="max-w-500 min-w-500 h-400 p-50 b-r-8 bg-grey shadow-grey-inset open-panel-right text-title o-y-scroll scroll-css">
            <h2 class="m-b-20">{{checkContent.typeName}}</h2>
            <p class="m-v-10">
                <span>状态：</span>
                <span class="text-grey fs-13">
                    {{checkContent.status == 1 ? '审核中' : (checkContent.status == 2 ? '已通过' : '未通过')}}
                </span>
            </p>
            <p class="m-v-10">
                <span>申请时间：</span>
                <span class="text-grey fs-13">{{checkContent.startTime}}</span>
            </p>
            <p class="m-v-10">
                <span>通过时间：</span>
                <span class="text-grey fs-13">{{checkContent.endTime}}</span>
            </p>
            <div class="m-v-10">
                <span>申请内容：</span>
                <div class="text-grey fs-13 p-l-30 p-v-10">
                    {{checkContent.checkInfo}}
                </div>
            </div>
            <div class="m-v-10">
                <span>审批回复：</span>
                <div class="text-grey fs-13 p-l-30 p-v-10">
                    {{checkContent.checkAnswer}}
                </div>
            </div>
        </div>
        <div class="absolute top-0 left-50 w-80 min-h-300 max-h-300 h-full bg-red bg-pull-bottom cursor-pointer"
             :class="{'open-pull': ifPull}"
             @click="handleOpenSubmit()"></div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            ifPull: false,
            checkContent: {
                typeName: '',
                status: '',
                startTime: '',
                endTime: '',
                checkInfo: '',
                checkAnswer: ''
            }
        }
    },
    methods: {
        handleOpenSubmit() {
            this.ifPull = !this.ifPull
            this.$emit('handleOpenSubmit')
        }
    }
}
</script>
<style lang="scss" scoped>
.bg-pull-bottom {
    background: url(../../../assets/pull-bottom.png) no-repeat;
    background-position: bottom;
}
</style>