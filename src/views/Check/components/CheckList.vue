<template>
    <div class="min-w-300 w-300 h-full shadow-grey-inset bg-grey p-30 o-y-scroll scroll-css">
        <div class="w-full h-90 bg-white text-title shadow-grey shadow-hover b-r-8 p-15 relative cursor-pointer m-b-25"
             v-for="(item, index) in checkList" :key="index"
             :class="{'active': curIndex === index}"
             @click="handleItemStyle(index)">
            <Icon :type="item.status != 1 ? 'ios-bookmark' : 'ios-bookmark-outline'" 
                  class="fs-25 absolute right-40 top-2-2" />
            <div>
                <p class="bold fs-15 d-inline-block">
                    {{item.typeName}}
                </p>
                <span class="fs-12 text-grey m-l-5">
                    {{item.status == 1 ? '审核中' : (item.status == 2 ? '已通过' : '未通过')}}
                </span>
            </div>
            <span class="fs-12 text-grey m-v-3 d-inline-block">{{item.startTime}}</span>
            <p class="fs-12 text-hidden text-grey">{{item.checkInfo}}</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            curIndex: 0,
            checkList: [
                {
                    typeName: '请假',
                    status: 1,
                    startTime: '2020-03-04 22:22',
                    endTime: '2020-03-10 22:22',
                    checkInfo: '因为需要什么什么什么什么，所以必须什么什么，需要请假，时间为一个月。',
                    checkAnswer: '无回复消息'
                },
                {
                    typeName: '其他',
                    status: 2,
                    startTime: '2020-03-04 22:22',
                    endTime: '2020-03-10 22:22',
                    checkInfo: 'v你看看军击溃喀什内存卡斯诺克超级阿森纳采集卡是那块',
                    checkAnswer: '爱看出口减少内存接口撒爱上你插卡式内存空间NSA课程三内存空间昵称尽可能情况检查三内存接口七年参加快女秋季课程承诺捐款去年春节前你此情况经常能看见请问你'
                },
                {
                    typeName: '建议',
                    status: 3,
                    startTime: '2020-03-04 22:22',
                    endTime: '2020-03-10 22:22',
                    checkInfo: '页面非常不好看，希望管理员重新设计下',
                    checkAnswer: '爱看出口减少内存接口撒爱上你插卡式内存空间NSA课程三内存空间昵称尽可能情况检查三内存接口七年参加快女秋季课程承诺捐款去年春节前你此情况经常能看见请问你'
                }
            ]
        }
    },
    mounted() {
        this.$emit('handleSyncData', this.checkList[this.curIndex])
    },
    updated() {
        this.$emit('handleSyncData', this.checkList[this.curIndex])
    },
    methods: {
        handleItemStyle(index) {
            this.curIndex = index
        }
    }
}
</script>script>

<style lang="scss" scoped>
.top-2-2 {
    top: -2px;
}
.active {
    color: #ccc;
    background: #393D49;
}
</style>>