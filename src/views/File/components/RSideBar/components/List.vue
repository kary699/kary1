<template>
    <div class="min-w-600 w-100-250 relative zIndex-9 bg-white">
        <div class="h-50 b-b flex j-between a-center">
            <h4 class="m-l-50">文件名</h4>
            <span>创建者</span>
            <span class="m-r-100">更新时间</span>
        </div>
        <div class="h-50 b-b flex j-between a-center b-r-3 fs-13 text-grey cursor-pointer bg-hover"
                v-for="(item, index) in fileList" :key="index"
                @click="$router.push(`/file/${item.fileLink}`)">
                <div class="m-l-15 flex j-started a-center">
                <img src="@/assets/dir.png" class="w-30 h-30 d-inline-block" v-if="item.fileType == 1">
                <img src="@/assets/docs.png" class="w-30 h-30 d-inline-block" v-else>
                <span class="max-w-120 min-w-120 text-hidden m-l-8">{{item.fileName}}</span>
                </div>
            <span class=" max-w-120 min-w-120 text-hidden">{{item.fileAdmin}}</span>
            <span class="p-r-50">{{item.fileTime}}</span>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            fileList: [
                {
                    fileName: '问问当刹那间卡车六年按擦就看出卡',
                    fileAdmin: '安和aksclkanslknkalscn',
                    fileTime: '2020-03-05 22:52',
                    fileType: 1
                },
                {
                    fileName: '问问当刹那间卡车六年按擦就看出卡',
                    fileAdmin: '安和aksclkanslknkalscn',
                    fileTime: '2020-03-05 22:52',
                    fileType: 2
                },
                {
                    fileName: '问问当刹那间卡车六年按擦就看出卡',
                    fileAdmin: '安和aksclkanslknkalscn',
                    fileTime: '2020-03-05 22:52',
                    fileType: 1
                }
            ]
        }
    }

}
</script>

<style lang="scss" scoped>
.w-100-250 {
    width: calc(100% - 250px);
}
.bg-hover {
    transition: all .3s;
    &:hover {
        color: #ccc;
        background: #393D49;
    }
}
</style>