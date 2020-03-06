<template>
    <div class="w-200 h-100 fixed top-100 right-50 flex flex-column j-center a-center">
        <Tooltip content="请选择 .docx / .doc 格式文件,大小不超过20M" placement="bottom" max-width="150" class="m-b-20">
            <div class="w-150 h-30 bg-grey text-title text-center lh-28 bold b-r-2 border cursor-pointer shadow-hover">导 入</div>
        </Tooltip>
        <div class="w-150 h-30 bg-black text-white text-center lh-30 bold b-r-2 cursor-pointer relative shadow-hover"
            @mouseover="ifShow = true"
            @mouseout="ifShow = false">
            新 建
            <div class="w-150 h-90 bg-white border b-r-3 absolute top-30 left-0 fw-400 text-left zInedx-9" 
                v-show="ifShow">
                <router-link to="/docs">
                    <div class="w-150 h-30 text-grey lh-28 cursor-pointer m-l-20 m-v-10">
                        <img src="@/assets/docs.png" class="w-20 h-20 d-inline-block m-r-10">
                        <span>创建文件</span>
                    </div>
                </router-link>
                <div class="w-150 h-30 text-grey lh-28 cursor-pointer"
                     @click="handleBuildDir()">
                    <img src="@/assets/dir.png" class="w-20 h-20 d-inline-block m-l-20 m-r-10">
                    <span>创建文件夹</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            ifShow: false
        }
    },
    methods: {
        handleBuildDir() {
            this.$emit('handleBuildDir')
        }
    }
}
</script>