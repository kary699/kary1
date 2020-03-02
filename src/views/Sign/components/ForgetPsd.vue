<template>
    <Form ref='form' :model="form" :rules="rules" class='max-w-300 w-full open-panel'>	
        <h1 class="text-center text-main-black ">Forget Password</h1>
        <FormItem prop="phonenumber">
            <Input prefix="ios-call-outline"
                size="large"
                @keyup.enter.native="submit()"
                placeholder="请输入手机号"
                v-model="form.phonenumber"/>
        </FormItem>
        <FormItem prop="proof">
            <div class="flex j-between a-center">
                <Input placeholder="请输入验证码" 
                    class=" w-150"/> 
                <Button type="primary" ghost class='p-h-20 m-h-15'>发送验证码</Button>
            </div>
        </FormItem>
        <FormItem>
            <Button type="primary" ghost class="w-full bg-main text-main-yellow"
                size="large" @click="handleStatus(4)">next</Button>
        </FormItem>
        <div class="flex j-between">
            <span></span>
            <a class="fs-13 m-r-20"
                @click="handleStatus(1)">Sign in</a>
        </div>
    </Form>
</template>

<script>
export default {
    data() {
        return {
            form: {
                phonenumber: '',
                proof: ''
            },
            rules: {
                phonenumber: [
                    { required: true, message: '手机号码不能为空', trigger: 'blur' },
                    { type: 'string', min: 11, message: '请确认手机号 ', trigger: 'blur' }
                ],
                proof: [
                    { required: true, message: '验证码不能为空', trigger: 'blur' },
                    { type: 'string', min: 6, message: '', trigger: 'blur' }
                ]
            }
        }
    },
    methods: {
        handleStatus(val) {
            this.$emit('handleStatus', val)
        }
    }
}
</script>