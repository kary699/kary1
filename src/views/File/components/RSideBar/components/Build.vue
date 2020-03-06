<template>
    <div class="fixed top-0 left-0 w-full h-full flex j-center a-center zIndex-10 bg-black-opacity" v-show="ifShow">
        <div class="w-400 h-200 bg-white b-r-3 p-h-40 p-v-30 relative">
            <h3>新建文件夹</h3>
             <Input class="m-v-25"
                    @keyup.enter.native="submit()"
                    placeholder="请输入文件夹的名称"
                    v-model="fileName"/>
            <div class="absolute right-50">
                <Button class="w-80" :disabled="ifAble" @click="submit()">
                    确定
                </Button>
                <Button class="w-80 m-l-15" @click="ifShow = !ifShow">
                    取消
                </Button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            ifShow: false,
            ifAble: true,
            fileName: ''
        }
    },
    methods: {
        submit() {
            let params = {
                fileName: this.fileName,
                fileAdmin: 'user',
                fileTime: '2020-03-05 22:52',
                fileType: 1
            }
            this.$emit('handleAddDir', params)
            this.fileName = ''
            this.ifShow = !this.ifShow
        }
    },
    watch: {
        fileName: function(val) {
            if (val.length) return this.ifAble = false
            this.ifAble = true
        }
    }
}
</script>

<style lang="scss" scoped>
// 遮罩背景
.bg-black-opacity {
    background: rgba(55, 55, 55, 0.6);
}
</style>