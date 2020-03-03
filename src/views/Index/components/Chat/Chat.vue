<template>
    <div class="w-60 h-100 fixed top-100 left-0">
        <div class="nav-btn shadow-grey w-40 h-40" v-show="ifShow" @click="changeChatPanel()">
            <Tooltip content="聊天" placement="right">
                <Icon type="ios-cafe" class="fs-27 cursor-pointer m-l-5 m-t-8"/>
            </Tooltip>
        </div>
        <ChatPanel @handleChatPanel="changeChatPanel" ref="chatPanel" />
    </div>
</template>

<script>
import ChatPanel from './components/ChatPanel'
export default {
    components: {
        ChatPanel
    },
    data() {
        return {
            ifShow: true
        }
    },
    methods: {
        changeChatPanel() {
            this.$refs.chatPanel.ifShow = !this.$refs.chatPanel.ifShow
            this.ifShow = !this.ifShow
        }
    }
}
</script>

<style lang="scss" scoped>
.nav-btn {
    border-radius: 0 50% 50% 50%;
}
</style>