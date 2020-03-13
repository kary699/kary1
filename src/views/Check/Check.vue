<template>
    <div class="min-w-1200 w-full h-full flex j-between a-center">
        <CheckSubmit ref="checkSubmit" 
                        @handleCloseSubmit="closeSubmit()"
                        @handleSendData="sendData" />
        <CheckInfo ref="checkInfo" @handleOpenSubmit="openSubmit()" />
        <CheckList ref="checkList" @handleSyncData="syncData" />
    </div> 
</template>

<script>
import CheckSubmit from './components/CheckSubmit'
import CheckInfo from './components/CheckInfo'
import CheckList from './components/CheckList'
export default {
    components: {
        CheckSubmit,
        CheckInfo,
        CheckList
    },
    methods: {
        openSubmit() {
            this.$refs.checkSubmit.ifShow = !this.$refs.checkSubmit.ifShow
        },
        closeSubmit() {
            this.$refs.checkInfo.ifPull = !this.$refs.checkInfo.ifPull
        },
        sendData(params) {
            let { checkType, checkInfo } = params
            this.$refs.checkList.checkList.unshift({
                typeName: checkType == 1 ? '建议' : (checkType == 2 ? '请假' : '其他'),
                status: 1,
                startTime: '2020-03-04 22:22',
                endTime: '' || '审核中',
                checkInfo: checkInfo,
                checkAnswer: '' || '无回复消息'
            })
        },
        syncData(params) {
            this.$refs.checkInfo.checkContent = params
        }
    }
}
</script>