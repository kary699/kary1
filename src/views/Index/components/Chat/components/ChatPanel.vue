<template>
    <div ref="search" class="fixed top-100 left-50 w-300 h-400 bg-white b-r-20 zIndex-9 shadow-grey transition open-panel" v-show="ifShow">
        <div class="w-full h-40 b-r-20 bg-grey shadow-grey cursor-move flex j-started a-center" ref="searchChild">
            <div class="absolute left-0 w-40 h-40 b-round cursor-pointer shadow-grey flex j-center a-center bg-white" @click="handleChatPanel()">
                <Tooltip content="关闭聊天" placement="bottom">
                    <Icon type="ios-close" class="fs-25 text-title" />
                </Tooltip>
            </div>
            <div class="w-full text-center noselect">Online Chat</div>
        </div>
        <div class="h-320 o-y-scroll p-h-15" ref="chat">
            <div class="m-v-20" v-for="(item, index) in chatList" :key="index">
                <div class="w-30 h-30 b-round d-inline-block bg-black text-white shadow-grey text-center lh-30 v-a-top m-h-5 cursor-pointer" 
                    :class="{'pull-right': item.type, 'bg-grey': item.type, 'text-content': item.type}">
                    {{item.name.split('')[0]}}
                </div>
                <div class="w-100-50 d-inline-block bg-black text-white b-r-8 shadow-grey m-h-5 p-6 fs-13 word-break"
                    :class="{'bg-grey': item.type, 'text-content': item.type}">
                    {{item.message}}
                </div>
            </div>
        </div>
        <div class="absolute w-full h-40 b-r-20 bottom-0 left-0 bg-grey flex j-between a-center shadow-grey">
            <input class="w-250 h-30 b-none lh-30 fs-13 p-h-15 bg-grey m-l-10"
                   @keyup.enter="ChatSubmit()"
                   placeholder="说点儿什么"
                   v-model="chatMsg"/>
            <div class="w-40 h-40 b-round cursor-pointer shadow-grey flex j-center a-center bg-white">
                <Icon type="ios-send" class="fs-25 text-title" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            ifShow: false,
            chatMsg: '',
            chatList: [
                {
                    name: 'Asdf',
                    message: 'sadks尽可能就看参见奥斯卡ask里面除了卡死奴才克拉斯撒娇开车把接口是成本价阿森纳卡死你sssssssssssssssssssddddddddddddddddddd',
                    type: 0
                },
                {
                    name: '我是甲乙',
                    message: '哈萨克你参考',
                    type: 1
                },
                {
                    name: '开始的',
                    message: '2111111111111111111111111111111111111111111111111111111111111111111111111111111111111111',
                    type: 0
                }
            ]
        }
    },
    mounted() {
        this.dragBox(this.$refs.searchChild, this.$refs.search)
    },
    methods: {
        handleChatPanel() {
            this.$emit('handleChatPanel')
        },
        ChatSubmit() {
            if (!this.chatMsg) return this.$Message.warning('有消息再发哦~')
            let item = {
                name: '我是甲乙',
                message: this.chatMsg,
                type: 1
            }
            this.chatList.push(item)
            this.chatMsg = ''
            this.$nextTick(() => {
                this.$refs.chat.scrollTop = this.$refs.chat.scrollHeight
            })
        },
        dragBox(drag, wrap) {
            const getCss = (ele, prop) => {
                return parseInt(window.getComputedStyle(ele)[prop])
            }
            let initX,
                initY,
                dragable = false,
                wrapLeft = getCss(wrap, "left"),
                wrapRight = getCss(wrap, "top")
                
            drag.addEventListener("mousedown", (e) => {
                dragable = true
                initX = e.clientX
                initY = e.clientY
            }, false)
            document.addEventListener("mousemove", (e) => {
                if (dragable === true ) {
                    let nowX = e.clientX,
                        nowY = e.clientY,
                        disX = nowX - initX,
                        disY = nowY - initY
                    wrap.style.left = wrapLeft + disX + "px"
                    wrap.style.top = wrapRight + disY + "px"
                }
            })
            document.addEventListener("mouseup", (e) => {
                dragable = false
                wrapLeft = getCss(wrap, "left")
                wrapRight = getCss(wrap, "top")
            }, false)
        }
    }
}
</script>

<style lang="scss" scoped>
.h-320 {
    height: 320px;
}
.w-100-50 {
    width: calc(100% - 50px);
}
</style>