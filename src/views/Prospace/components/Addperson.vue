<template>
    <div class="w-full h-full fixed top-0 left-0 bg-black-opacity zIndex-9 flex j-center a-center" v-if='isShow'>
         <div class="w-400 h-200 bg-white b-r-8">
             <Form ref="form" :model="form" :rules="rules" class="max-w-250 min-w-250">
                <h2 class="text-center m-b-15 w-400">邀请谁呐</h2>
                <FormItem prop="name" class=" relative">
                    <Input  @keyup.enter.native="submit()"
                            placeholder="搜索"
                            v-model="form.search" class="w-300 m-l-40" />                            
                    <Icon type="ios-search-outline"  class="fs-25 absolute top-8 left-5"/>         
                </FormItem>
                 <FormItem prop="assign">
                    <Input  @keyup.enter.native="submit()"
                            placeholder="任务"
                            v-model="form.sassign" class="w-300 m-l-40" />                      
                </FormItem>        
                <FormItem class="flex j-center a-center w-300 m-l-30">
                    <Button class="w-120 " @click="submit()">确认</Button>
                </FormItem>      
            </Form>           
         </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            isShow: false,
            form: {
                search: '',
                assign: ''
            },
            rules: {
                search: [
                    { required: true, message: '不能为空哦', trigger: 'blur'}
                ],
                assign: [
                    { required: true, message: '不能为空哦', trigger: 'blur'}
                ]
            }
        }
    },
    methods: {
        submit() {
            this.isShow = !this.isShow
            // let { search, assign } = this.form
            // if (!search || !assign) return this.$Message.warning('请完消息哦~')
            // let params = {
            //     search: search,
            //     assign: assign
            // }
            // this.$emit('handleSendData', params)
            // this.$refs.form.resetFields()
            // this.$Message.success('邀请成功')
        }
    }
}
</script>
<style lang="scss" scoped>
</style>