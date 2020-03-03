<template>
    <div class="w-full h-full fixed top-0 left-0 bg-black-opacity zIndex-9 flex j-center a-center" v-if="ifShow">
        <div class="w-400 h-400 bg-grey shadow-grey b-r-5 flex j-center a-center">
            <Form ref="form" :model="form" :rules="rules" class="max-w-250 min-w-250">
                <h2 class="text-center m-b-15">填写入坑信息</h2>
                <FormItem prop="name">
                    <Input  @keyup.enter.native="submit()"
                            placeholder="请输入真实姓名"
                            v-model="form.username" >
                        <span slot="prepend"> 姓 名 </span>
                    </Input>
                </FormItem>
                <FormItem prop="nickname">
                    <Input @keyup.enter.native="submit()"
                        placeholder="请输入昵称"
                        v-model="form.nickname">
                        <span slot="prepend"> 昵 称 </span>
                    </Input>
                </FormItem>
                <FormItem prop="major">
                    <Input @keyup.enter.native="submit()"
                        placeholder="请输入专业名称"
                        v-model="form.major">
                        <span slot="prepend"> 专 业 </span>
                    </Input>
                </FormItem>
                <FormItem prop="job" class="m-0">
                    <Select v-model="form.job"
                            clearable  
                            @keyup.enter.native="submit()"
                            placeholder="请选择职业方向">
                        <Option v-for="(item, index) in selectList" 
                                :key="index"
                                :value="item.value">
                                {{ item.jobName }}
                        </Option>
                    </Select>
                </FormItem>
                <FormItem class="flex j-center a-center">
                    <Button class="w-120 m-t-20" @click="submit()">确认</Button>
                </FormItem>      
            </Form>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            ifShow: true,
            form: {
                username: '',
                nickname: '',
                major: '',
                job: ''
            },
            selectList: [
                {
                    value: 1,
                    jobName: 'WEB方向'
                },
                {
                    value: 2,
                    jobName: 'Python方向'
                },
                {
                    value: 3,
                    jobName: 'PHP方向'
                }
            ],
            rules: {
                name: [
                    { required: true, message: '真实姓名不能为空', trigger: 'blur' }
                ],
                nickname: [
                    { required: true, message: '昵称不能为空', trigger: 'blur' }
                ],
                major: [
                    { required: true, message: '专业不能为空', trigger: 'blur' }
                ],
                job: [
                    { required: true, message: '职业方向不能为空', trigger: 'blur' }
                ]
            }
        }
    },
    methods: {
        submit() {
            this.ifShow = !this.ifShow
        }
    }
}
</script>

<style lang="scss" scoped>
.bg-black-opacity {
    background: rgba(55, 55, 55, 0.6);
}
</style>