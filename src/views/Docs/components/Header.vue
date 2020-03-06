<template>
    <div class="fixed top-0 left-0 bg-white shadow-grey w-full h-50 flex j-between a-center zIndex-10">
        <div class="max-w-300 min-w-300 h-full m-l-30 flex a-center">
            <Tooltip content="返回" placement="bottom">
                <div class="w-40 h-25 border b-r-3 flex j-center a-center cursor-pointer" @click="$router.push('/file')">
                    <Icon type="ios-arrow-back" class="fs-20" />
                </div>
            </Tooltip>
            <Tooltip content="重命名" placement="bottom">
                <input type="text" 
                       class="w-100 bold text-center text-title h-25 m-l-20 b-none b-b text-hidden"
                       placeholder="未命名">
            </Tooltip>
            <Tooltip content="收藏" placement="bottom">
                <div class="flex j-center a-center cursor-pointer m-l-10">
                    <Icon type="ios-bookmark-outline" class="fs-18 m-t-5" />
                </div>
            </Tooltip>
            <span class="fs-12 text-grey m-l-10">文档将自动保存</span>
        </div>
        <div class="min-w-200 h-full m-r-30 flex a-center">
            <div class="m-r-15">
                <Tooltip content="安和" placement="bottom">
                    <img src="https://avatar.smcdn.cn/6hpcFLHt0XYWitFH/image.jpg!avatar"
                         class="w-20 h-20 b-round cursor-pointer m-l-10">
                </Tooltip>
                <Tooltip content="战神" placement="bottom">
                    <img src="https://avatar.smcdn.cn/6hpcFLHt0XYWitFH/image.jpg!avatar"
                        class="w-20 h-20 b-round cursor-pointer m-l-10">
                </Tooltip>
                <Tooltip content="user" placement="bottom">
                    <img src="https://avatar.smcdn.cn/6hpcFLHt0XYWitFH/image.jpg!avatar"
                        class="w-20 h-20 b-round cursor-pointer m-l-10">
                </Tooltip>
            </div>
            <Tooltip content="版本/讨论" placement="bottom">
                <div class="flex j-center a-center cursor-pointer m-l-5 m-t-5">
                    <Icon type="ios-timer-outline" class="fs-23 text-title" />
                </div>
            </Tooltip>
            <Tooltip content="全屏" placement="bottom">
                <div class="flex j-center a-center cursor-pointer m-l-10 m-t-5"
                     @click="fullscreen">
                    <Icon type="md-arrow-dropright-circle" class="fs-23 text-title" />
                </div>
            </Tooltip>
            <Tooltip content="删除" placement="bottom">
                <div class="flex j-center a-center cursor-pointer m-l-10 m-t-5">
                    <Icon type="ios-trash" class="fs-23 text-red" />
                </div>
            </Tooltip>
        </div>
    </div>
</template>

<script>
import screenfull from 'screenfull'
export default {
    methods: {
		fullscreen() {
			// 全屏切换
			screenfull.toggle()
		}
	}
}
</script>