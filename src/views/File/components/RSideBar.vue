<template>
    <div class="w-full p-h-40 p-v-15 o-y-scroll scroll-css">
        <div class="w-200 h-100 fixed top-100 right-50 flex flex-column j-center a-center">
            <div class="w-150 h-30 bg-black text-white text-center lh-30 bold b-r-2 cursor-pointer m-b-20 shadow-hover">新 建</div>
            <div class="w-150 h-30 bg-grey text-title text-center lh-28 bold b-r-2 border cursor-pointer shadow-hover">导 入</div>
        </div>
        <div class="min-w-600 w-100-250 relative zIndex-9 bg-white">
            <div class="h-50 b-b flex j-between a-center">
                <h4 class="m-l-50">文件名</h4>
                <span>创建者</span>
                <span class="m-r-100">更新时间</span>
            </div>
            <div class="h-50 b-b flex j-between a-center text-center b-r-3 cursor-pointer bg-hover"
                 v-for="(item, index) in fileList" :key="index">
                <h4 class="m-l-40 max-w-120 min-w-120 text-hidden">{{item.fileName}}</h4>
                <span class=" max-w-120 min-w-120 text-hidden">{{item.fileAdmin}}</span>
                <span class="p-r-50">{{item.fileTime}}</span>
            </div>
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
                    fileTime: '2020-03-05 22:52'
                },
                {
                    fileName: '问问当刹那间卡车六年按擦就看出卡',
                    fileAdmin: '安和aksclkanslknkalscn',
                    fileTime: '2020-03-05 22:52'
                },
                {
                    fileName: '问问当刹那间卡车六年按擦就看出卡',
                    fileAdmin: '安和aksclkanslknkalscn',
                    fileTime: '2020-03-05 22:52'
                },
                {
                    fileName: '问问当刹那间卡车六年按擦就看出卡',
                    fileAdmin: '安和aksclkanslknkalscn',
                    fileTime: '2020-03-05 22:52'
                },
                {
                    fileName: '问问当刹那间卡车六年按擦就看出卡',
                    fileAdmin: '安和aksclkanslknkalscn',
                    fileTime: '2020-03-05 22:52'
                },
                {
                    fileName: '问问当刹那间卡车六年按擦就看出卡',
                    fileAdmin: '安和aksclkanslknkalscn',
                    fileTime: '2020-03-05 22:52'
                },
                {
                    fileName: '问问当刹那间卡车六年按擦就看出卡',
                    fileAdmin: '安和aksclkanslknkalscn',
                    fileTime: '2020-03-05 22:52'
                },
                {
                    fileName: '问问当刹那间卡车六年按擦就看出卡',
                    fileAdmin: '安和aksclkanslknkalscn',
                    fileTime: '2020-03-05 22:52'
                },
                {
                    fileName: '问问当刹那间卡车六年按擦就看出卡',
                    fileAdmin: '安和aksclkanslknkalscn',
                    fileTime: '2020-03-05 22:52'
                },
                {
                    fileName: '问问当刹那间卡车六年按擦就看出卡',
                    fileAdmin: '安和aksclkanslknkalscn',
                    fileTime: '2020-03-05 22:52'
                },
                {
                    fileName: '问问当刹那间卡车六年按擦就看出卡',
                    fileAdmin: '安和aksclkanslknkalscn',
                    fileTime: '2020-03-05 22:52'
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