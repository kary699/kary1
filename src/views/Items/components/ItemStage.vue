<template>
    <div class="min-w-1200 h-index flex j-between a-center p-10">
        <div class="w-300 h-full bg-white7 b-r-3 border m-r-10">
            <div class="h-50 flex j-between a-center p-h-10">
                <div>
                    <div class="b-r-8 w-20 h-20 bg-black text-center lh-20 fs-13 text-white d-inline-block">{{list.loading.length}}</div>
                    <span class="m-l-10 bold fs-14">待办</span>
                </div>
                <Icon type="md-add" class="fs-23 cursor-pointer" />
            </div>
            <div class="h-main o-y-scroll scroll-css p-h-10">
                <div class="w-full bg-grey b-l b-4 b-red b-r-5 fs-12 p-10 cursor-pointer m-v-20 noselect shadow-hover"
                     v-for="(item, index) in list.loading" :key="index">
                    <p class="text-black bold">{{item.note}}</p>
                    <span class="bg-white7 p-h-10 p-v-2 b-r-15 m-t-5 m-b-10 d-inline-block">{{item.time}}</span>
                    <div class="m-b-3 text-grey">
                        <Icon type="ios-list-box-outline" class="fs-15 v-a-middle m-r-5" />
                        <span>{{item.todoList}}</span>
                    </div>
                    <div class="text-grey">
                        <Icon type="ios-person" class="fs-15 v-a-middle m-r-5" />
                        <span>{{item.userList[0]}}</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-300 h-full bg-white7 b-r-3 border m-r-10">
            <div class="h-50 flex j-between a-center p-h-10">
                <div>
                    <div class="b-r-8 w-20 h-20 bg-black text-center lh-20 fs-13 text-white d-inline-block">{{list.doing.length}}</div>
                    <span class="m-l-10 bold fs-14">进行中</span>
                </div>
                <Icon type="md-add" class="fs-23 cursor-pointer" />
            </div>
            <div class="h-main o-y-scroll scroll-css p-h-10">
                <div class="w-full bg-grey b-l b-4 b-blue b-r-5 fs-12 p-10 cursor-pointer m-v-20 noselect shadow-hover"
                     v-for="(item, index) in list.doing" :key="index">
                    <p class="text-black bold">{{item.note}}</p>
                    <span class="bg-white7 p-h-10 p-v-2 b-r-15 m-t-5 m-b-10 d-inline-block">{{item.time}}</span>
                    <div class="m-b-3 text-grey">
                        <Icon type="ios-list-box-outline" class="fs-15 v-a-middle m-r-5" />
                        <span>{{item.todoList}}</span>
                    </div>
                    <div class="text-grey">
                        <Icon type="ios-person" class="fs-15 v-a-middle m-r-5" />
                        <span>{{item.userList[0]}}</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-300 h-full bg-white7 b-r-3 border m-r-10">
            <div class="h-50 flex j-between a-center p-h-10">
                <div>
                    <div class="b-r-8 w-20 h-20 bg-black text-center lh-20 fs-13 text-white d-inline-block">{{list.ending.length}}</div>
                    <span class="m-l-10 bold fs-14">已完成</span>
                </div>
                <Icon type="md-add" class="fs-23 cursor-pointer" />
            </div>
            <div class="h-main o-y-scroll scroll-css p-h-10">
                <div class="w-full bg-grey b-l b-4 b-yellow b-r-5 fs-12 p-10 cursor-pointer m-v-20 noselect shadow-hover"
                     v-for="(item, index) in list.ending" :key="index">
                    <p class="text-black bold">{{item.note}}</p>
                    <span class="bg-white7 p-h-10 p-v-2 b-r-15 m-t-5 m-b-10 d-inline-block">{{item.time}}</span>
                    <div class="m-b-3 text-grey">
                        <Icon type="ios-list-box-outline" class="fs-15 v-a-middle m-r-5" />
                        <span>{{item.todoList}}</span>
                    </div>
                    <div class="text-grey">
                        <Icon type="ios-person" class="fs-15 v-a-middle m-r-5" />
                        <span>{{item.userList[0]}}</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-300 h-full bg-white7 b-r-3 border">
            <div class="h-50 flex j-between a-center p-h-10">
                <div>
                    <div class="b-r-8 w-20 h-20 bg-black text-center lh-20 fs-13 text-white d-inline-block">{{list.success.length}}</div>
                    <span class="m-l-10 bold fs-14">已验收</span>
                </div>
                <Icon type="md-add" class="fs-23 cursor-pointer" />
            </div>
            <div class="h-main o-y-scroll scroll-css p-h-10">
                <div class="w-full bg-grey b-l b-4 b-green b-r-5 fs-12 p-10 cursor-pointer m-v-20 noselect shadow-hover"
                     v-for="(item, index) in list.success" :key="index">
                    <p class="text-black bold">{{item.note}}</p>
                    <span class="bg-white7 p-h-10 p-v-2 b-r-15 m-t-5 m-b-10 d-inline-block">{{item.time}}</span>
                    <div class="m-b-3 text-grey">
                        <Icon type="ios-list-box-outline" class="fs-15 v-a-middle m-r-5" />
                        <span>{{item.todoList}}</span>
                    </div>
                    <div class="text-grey">
                        <Icon type="ios-person" class="fs-15 v-a-middle m-r-5" />
                        <span>{{item.userList[0]}}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            list: {
                loading: [
                    {
                        note: '我看看这个弄啥嘞是，我看看这个弄啥嘞是，我看看这个弄啥嘞是，我看看这个弄啥嘞是，我看看这个弄啥嘞是，我看看这个弄啥嘞是，我看看这个弄啥嘞是，我看看这个弄啥嘞是，我看看这个弄啥嘞是',
                        time: '今天',
                        todoList: '服务器 搭建测试环境',
                        userList: [
                            '工程师 安和',
                            '前端 安和'
                        ]
                    },
                    {
                        note: '项目空间接口设计部分',
                        time: '今天',
                        todoList: 'Java 数据库设计',
                        userList: [
                            '后台 紫薇',
                            '后台 张三'
                        ]
                    }
                ],
                doing: [
                    {
                        note: '项目空间看板UI部分',
                        time: '今天',
                        todoList: '前端 搭建项目环境',
                        userList: [
                            '前端 安和',
                            '后台 张三'
                        ]
                    },
                    {
                        note: '这个部分非常急，赶快开发，急需上线。这个部分非常急，赶快开发，急需上线。这个部分非常急，赶快开发，急需上线。这个部分非常急，赶快开发，急需上线。这个部分非常急，赶快开发，急需上线。这个部分非常急，赶快开发，急需上线。这个部分非常急，赶快开发，急需上线。这个部分非常急，赶快开发，急需上线。这个部分非常急，赶快开发，急需上线。这个部分非常急，赶快开发，急需上线。这个部分非常急，赶快开发，急需上线。这个部分非常急，赶快开发.',
                        time: '今天',
                        todoList: '服务器 搭建测试环境',
                        userList: [
                            '工程师 安和',
                            '前端 安和'
                        ]
                    },
                    {
                        note: '项目空间看板UI部分',
                        time: '今天',
                        todoList: '前端 搭建项目环境',
                        userList: [
                            '前端 安和',
                            '后台 张三'
                        ]
                    },
                    {
                        note: '项目空间看板UI部分',
                        time: '今天',
                        todoList: '前端 搭建项目环境',
                        userList: [
                            '前端 安和',
                            '后台 张三'
                        ]
                    }
                ],
                ending: [
                    {
                        note: '前端A组待验收',
                        time: '本周五',
                        todoList: '前端 登陆注册部分结束',
                        userList: [
                            '前端 蜻蜓队长',
                            '前端 安和'
                        ]
                    },
                    {
                        note: '前端考核部分结束，待验收',
                        time: '本周五',
                        todoList: '前端 考核部分',
                        userList: [
                            '前端 阿童木',
                            '后台 张三'
                        ]
                    }
                ],
                success: [
                    {
                        note: '项目UI需要本周内制作结束',
                        time: '本周三',
                        todoList: '原型 UI设计',
                        userList: [
                            '产品 卡布达'
                        ]
                    }
                ]
            }
        }
    }
}
</script>

<style lang="scss" scoped>
// h-index指的当前组件所用的弹性高度
.h-index {
    height: calc(100% - 90px);
}
</style>