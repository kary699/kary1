<template>
    <div class="fixed top-0 left-0 w-full h-full flex j-center a-center bg-black-opacity zIndex-9" v-show="ifShow">
        <Form ref="form" :model="form" :rules="rules" class="max-w-500 min-w-500 h-500 p-50 b-r-8 shadow-grey bg-grey relative">
            <h2 class="text-center m-b-15">填写审批信息</h2>
            <FormItem prop="checkType" class="m-0">
                <Select v-model="form.checkType"
                        class="text-center"
                        clearable  
                        @keyup.enter.native="submit()"
                        placeholder="请选择审批类型">
                    <Option v-for="(item, index) in selectList" 
                            :key="index"
                            :value="item.value">
                            {{ item.checkName }}
                    </Option>
                </Select>
            </FormItem>
            <FormItem prop="checkInfo" label="申请内容">
                <Input v-model="form.checkInfo" 
                        type="textarea" 
                        :autosize="{minRows: 10,maxRows: 10}" 
                        placeholder="请填写申请内容" />
            </FormItem>  
            <div class="flex j-center a-center cursor-pointer">
                <div class="w-40 h-40 b-round shadow-grey shadow-hover flex j-center a-center bg-white"
                 @click="submit()">
                    <Icon type="ios-send" class="fs-25 text-title" />
                </div>
            </div>  
            <div class="absolute close-position w-40 h-40 b-round shadow-grey shadow-hover flex j-center a-center bg-white cursor-pointer"
                 @click="handleCloseSubmit()">
                    <Icon type="ios-close" class="fs-30 bold text-title" />
                </div> 
        </Form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            ifShow: false,
            form: {
                checkType: '',
                checkInfo: ''
            },
            selectList: [
                {
                    value: 1,
                    checkName: '建议'
                },
                {
                    value: 2,
                    checkName: '请假'
                },
                {
                    value: 3,
                    checkName: '其他'
                }
            ],
            rules: {
                name: [
                    { required: true, message: '审批类型不能为空', trigger: 'blur' }
                ],
                checkInfo: [
                    { required: true, message: '审批内容不能为空', trigger: 'blur' }
                ]
            }
        }
    },
    methods: {
        submit() {
            let { checkType, checkInfo } = this.form
            if (!checkType || !checkInfo) return this.$Message.warning('请完善审批消息哦~')
            let params = {
                checkType: checkType,
                checkInfo: checkInfo
            }
            this.$emit('handleSendData', params)
            this.$refs.form.resetFields()
            this.$Message.success('申请成功，请您耐心等待结果哦~')
        },
        handleCloseSubmit() {
            this.ifShow = !this.ifShow
            this.$emit('handleCloseSubmit')
        }
    }
}
</script>

<style lang="scss" scoped>
.close-position {
    top: -10px;
    right: -10px;
}
</style>