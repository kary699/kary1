<template>
    <div class=" w-full h-full flex j-center a-center absolute"> 
        <div class="w-200 h-200 m-v-100">
            <Button type="info" size="large" ghost class="m-t-80" @click="isShow()"> 审核</Button>
            <Button type="info" size="large" ghost>请假</Button>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            isShow: false
        }
    },
    methods: {
        isShow() {
            this.isShow = !this.isShow
        }
        
    }
}
</script>