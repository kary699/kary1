<template>
    <Form ref='form' :model="form" :rules="rules" class='max-w-300 w-full open-panel'>	
        <h1 class="text-center text-main-black ">Check Password</h1>
       <FormItem prop="password">
            <Input prefix="ios-unlock-outline" 
                size="large"
                type="password"
                password
                @keyup.enter.native="submit()"
                placeholder="请输入密码"
                v-model="form.password"/>
        </FormItem>
        <FormItem prop="rePassword">
            <Input prefix="ios-unlock-outline" 
                size="large"
                type="password"
                password
                @keyup.enter.native="submit()"
                placeholder="确认密码"
                v-model="form.rePassword"/>
        </FormItem>
        <FormItem>
            <Button type="primary" 
                    class="w-full bg-main text-main-yellow" 
                    size="large" 
                    @click="handleStatus(1)">Change</Button>
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
        const valiConfirmPwd = (rule, value, callback) => {
            if (value !== this.form.password) {
                callback(new Error('两次输入的密码不一致'))
            } else {
                callback()
            }
        }
        return {
            form: {
                password: '',
                rePassword: ''
            },
            rules: {
                password: [
                    { required: true, message: '密码不能为空', trigger: 'blur' },
                    { type: 'string', min: 6, message: '密码不得少于6位', trigger: 'blur' }
                ],
                rePassword: [
                    { required: true, message: '密码不能为空', trigger: 'blur' },
                    { type: 'string', min: 6, message: '密码不得少于6位', trigger: 'blur' },
                    { validator: valiConfirmPwd, message: '两次输入的密码不一致', trigger: 'blur' }
                ]
            }
        }
    },
    methods: {
        handleStatus(val) {
            this.form.password = ''
            this.form.rePassword = ''
            this.$emit('handleStatus', val) 
        }  // 第一个参数是父组件中监听的方法 第二个参数为要传的值
    }
}
</script>