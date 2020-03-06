<template>
    <div class="absolute top-10 w-400 search-css header-panel-css b-r-5 zIndex-10" :class="{'header-panel-show': ifShow}">
        <div class="h-50 bg-white flex j-started">
            <div class="w-50 h-50 flex j-center a-center">
                <Icon type="ios-search-outline" class="m-h-10 fs-20 cursor-pointer" />
            </div>
            <input type="text" 
                   ref="searchInput"
                   v-model="searchValue"
                   placeholder="输入文件名进行搜索"
                   class="w-300 fs-13 b-none">
            <div class="w-50 h-50 flex j-center a-center" v-show="ifOpenSearch">
                <Icon type="md-close-circle" class="m-h-10 fs-15 cursor-pointer"  @click="clearSearch()" />
            </div>
        </div>
        <div class="b-t b-grey max-h-500 bg-white o-y-scroll scroll-css" v-show="ifOpenSearch">
            <div class="m-t-8" v-if="searchData.length">
                <div class="m-l-20 fs-12 text-grey">相关词匹配</div>
                <div class="fs-12 text-grey p-20 p-t-10">
                    <a class="cursor-pointer flex j-started a-center b-b p-h-20 p-v-10"
                        v-for="(item, index) in searchData" :key="index"
                        :href="item.link" >
                        <img class="w-50 h-50" src="@/assets/docs.png">
                        <div class="m-l-15">
                            <h3 class="text-content m-b-8 text-hidden w-250">{{item.title}}</h3>
                            <span>{{item.time}}</span>
                        </div>
                    </a>
                </div>
            </div>
            <div class="flex j-center a-center fs-12 text-grey p-20" v-if="!searchData.length">
                无搜索结果
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            ifShow: false,
            ifOpenSearch: false,
            searchValue: '',
            searchData: [
                {
                    title: '啊哈算法',
                    time: '2019年11月13日 更新',
                    link: 'http://www.baidu.com'
                },
                {
                    title: 'Node_api文档萨迦可兑换萨迦的sadasdssa',
                    time: '2019年12月13日 更新',
                    link: 'http://www.baidu.com'
                },
                {
                    title: '期末打卡Node_api',
                    time: '2019年01月01日 更新',
                    link: 'http://www.baidu.com'
                },
                {
                    title: 'Node_api文档',
                    time: '2019年12月13日 更新',
                    link: 'http://www.baidu.com'
                },
                {
                    title: '期末打卡Node_api',
                    time: '2019年01月01日 更新',
                    link: 'http://www.baidu.com'
                },
                {
                    title: 'Node_api文档',
                    time: '2019年12月13日 更新',
                    link: 'http://www.baidu.com'
                },
                {
                    title: '期末打卡Node_api',
                    time: '2019年01月01日 更新',
                    link: 'http://www.baidu.com'
                },
                {
                    title: 'Node_api文档',
                    time: '2019年12月13日 更新',
                    link: 'http://www.baidu.com'
                },
                {
                    title: '期末打卡Node_api',
                    time: '2019年01月01日 更新',
                    link: 'http://www.baidu.com'
                },
                {
                    title: 'Node_api文档',
                    time: '2019年12月13日 更新',
                    link: 'http://www.baidu.com'
                },
                {
                    title: '期末打卡Node_api',
                    time: '2019年01月01日 更新',
                    link: 'http://www.baidu.com'
                }
            ]
        }
    },
    methods: {
        clearSearch() {
            this.searchValue = ''
            this.ifOpenSearch = false
        }
    },
    watch: {
        searchValue: function(val) {
            if (val.length) return this.ifOpenSearch = true
            return this.ifOpenSearch = false
        }
    }
}
</script>

<style lang="scss" scoped>
.search-css {
    box-shadow: 1.5px 4px 15px 0 rgba(0,0,0,0.1);
    left: -160px;
}
</style>