<template>
    <div class="relative top-0 left-0 bg-white shadow-grey min-w-1200 h-50 flex j-between a-center zIndex-10">
        <h2 class="m-l-50">
            <router-link to="/">Andocs</router-link>
        </h2>
        <div class="w-250 w-full h-full flex j-started a-center relative"
             :class="{'w-500': $route.name == 'file'}">
            <div class="w-200 border h-30 b-r-5 m-l-30 flex a-center cursor-text input-css" 
                    @click="handleSearch"
                    ref="searchWrapper"
                    v-if="$route.name == 'file'">
                <Icon type="ios-search-outline" class="m-l-10 fs-20 cursor-pointer" />
                <span class="m-l-8">搜索文档</span>
                <Search ref="search" />
            </div>
            <div class="m-l-50 h-50 w-50 flex j-center a-center cursor-pointer">
                <Icon type="ios-leaf-outline" class="fs-20" />
                <span class="fs-13 m-l-5 m-t-3">27.0</span>
            </div>
            <div class="m-h-20 h-50 w-50 flex j-center a-center relative"
                    @mouseover="$refs.notice.ifShow = true"
                    @mouseout="$refs.notice.ifShow = false">
                <Icon type="ios-notifications-outline" class="fs-22 cursor-pointer" />
                <Notice ref="notice" />
            </div>
            <div class="relative w-50 h-50 flex j-center a-center"
                    @mouseover="$refs.user.ifShow = true"
                    @mouseout="$refs.user.ifShow = false">
                <div class="w-30 h-30 b-round border cursor-pointer flex j-center a-center">A</div>
                <User ref="user"/>
            </div>
        </div>
    </div>
</template>

<script>
import Search from './components/Search'
import Notice from './components/Notice'
import User from './components/User'
export default {
    components: {
        Search,
        Notice,
        User
    },
    methods: {
        handleSearch(e) {
            let searchNode = this.$refs.searchWrapper
            if (!searchNode.contains(e.target)) return this.$refs.search.ifShow = false
            this.$refs.search.$refs.searchInput.focus()
            this.$refs.search.ifShow = true
            this.$refs.search.searchValue = ''
            this.$refs.search.ifOpenSearch = false
            return
        }
    }
}
</script>

<style lang="scss" scoped>
.input-css {
    transition: .5s all;
    &:hover {
        border-color: #666;
    }
}
</style>