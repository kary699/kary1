<template>
    <div class="w-full p-h-40 p-v-15 o-y-scroll scroll-css">
        <Nav @handleBuildDir="buildDir" />
        <List ref="list" />
        <Build ref="build" @handleAddDir="AddDir" />
    </div>
</template>

<script>
import Nav from './components/Nav'
import List from './components/List'
import Build from './components/Build'
export default {
    components: {
        Nav,
        List,
        Build
    },
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
    },
    methods: {
        buildDir() {
            this.$refs.build.ifShow = !this.$refs.build.ifShow
        },
        AddDir(params) {
            this.$refs.list.fileList.push(params)
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