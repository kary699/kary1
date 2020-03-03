<template>
    <div class="relative top-0 left-0 bg-white shadow-grey min-w-1200 h-50 flex j-between a-center">
        <h2 class="m-l-50">
            <router-link to="/">Andocs</router-link>
        </h2>
        <div class="w-200 w-full h-full flex j-started a-center relative">
            <div class="m-l-50 m-r-20 h-50 w-50 flex j-center a-center relative"
                    @mouseover="$refs.notice.ifShow = true"
                    @mouseout="$refs.notice.ifShow = false">
                <Icon type="ios-notifications-outline" class="fs-22 cursor-pointer" />
                <Notice ref="notice" />
            </div>
            <div class="relative w-50 h-50 flex j-center a-center"
                    @mouseover="$refs.user.ifShow = true"
                    @mouseout="$refs.user.ifShow = false">
                <div class="w-30 h-30 b-round border cursor-pointer flex j-center a-center">An</div>
                <User ref="user"/>
            </div>
        </div>
    </div>
</template>

<script>
import Notice from './components/Notice'
import User from './components/User'
export default {
    components: {
        Notice,
        User
    }
}
</script>