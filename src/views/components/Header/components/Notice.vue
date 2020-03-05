<template>
    <div class="absolute top-30 w-300 notice-css header-panel-css shadow-grey b-r-5 m-t-20 zIndex-10" :class="{'header-panel-show': ifShow}">
        <div class="h-30 bg-white fs-13 bold p-h-15 p-v-5 text-title">
            全部通知
        </div>
        <div class="b-t b-grey max-h-300 bg-white o-y-scroll scroll-css">
            <div class="m-t-5" v-if="noticeData.length">
                <div class="fs-12 text-grey p-20 p-t-10">
                    <a class="cursor-pointer flex j-started a-center b-b p-h-20 p-v-10"
                        v-for="(item, index) in noticeData" :key="index"
                        :href="item.link" >
                        <div class="w-30 h-30 b-round border b-black flex j-center a-center text-title">{{item.name.split('')[0]}}</div>
                        <div class="m-l-15">
                            <p class="text-content m-b-5">
                                <Tooltip :content="`${item.name} 邀请您加入 ${item.groupName}`" max-width="200">
                                    <p class="w-150 text-hidden">{{item.name}} 邀请您参与 {{item.groupName}}</p>
                                </Tooltip>
                            </p>
                            <span>{{item.time}}</span>
                        </div>
                    </a>
                </div>
            </div>
            <div class="flex j-center a-center fs-12 text-grey p-20" v-if="!noticeData.length">
                暂时没有通知
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            ifShow: false,
            noticeData: [
                {
                    name: '薛定谔的bug',
                    groupName: 'web小测',
                    time: '2019年11月13日 13:25',
                    link: 'http://www.baidu.com'
                },
                {
                    name: 'Andlog',
                    groupName: '后勤部门',
                    time: '2019年12月13日 13:25',
                    link: 'http://www.baidu.com'
                },
                {
                    name: '路人683',
                    groupName: '协作文档项目',
                    time: '2019年01月01日 13:25',
                    link: 'http://www.baidu.com'
                },
                {
                    name: 'Andlog',
                    groupName: '后勤部门',
                    time: '2019年12月13日 13:25',
                    link: 'http://www.baidu.com'
                },
                {
                    name: '路人683',
                    groupName: '协作文档项目',
                    time: '2019年01月01日 13:25',
                    link: 'http://www.baidu.com'
                },
                {
                    name: 'Andlog',
                    groupName: '后勤部门',
                    time: '2019年12月13日 13:25',
                    link: 'http://www.baidu.com'
                },
                {
                    name: '路人683',
                    groupName: '协作文档项目',
                    time: '2019年01月01日 13:25',
                    link: 'http://www.baidu.com'
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.notice-css {
    left: -200px;
}
</style>