<template>
    <Form ref="form" :model="form" :rules="rules" class="max-w-300 w-full open-panel">
        <h1 class="text-center text-main-black m-0 m-b-30">Sign In</h1>
        <FormItem prop="username">
            <Input prefix="ios-contact-outline" 
                class="border-main"
                size="large"
                @keyup.enter.native="submit()"
                placeholder="请输入用户名"
                v-model="form.username"/>
        </FormItem>
        <FormItem prop="password">
            <Input prefix="ios-unlock-outline" 
                size="large"
                type="password"
                password
                @keyup.enter.native="submit()"
                placeholder="请输入密码"
                v-model="form.password"/>
        </FormItem>
        <FormItem>
            <Button type="primary" class="w-full bg-main text-main-yellow" size="large" @click="submit()">Sign in</Button>
        </FormItem>
        <div class="flex j-between">
            <a class="fs-13 m-l-20"
                @click="handleStatus(2)">Sign up</a>
            <a class="fs-13 m-r-20"
                @click="handleStatus(3)">Forget password</a>
        </div>
    </Form>
</template>

<script>
export default {
    data() {
        return {
            form: {
                username: '',
                password: ''
            },
            rules: {
                username: [
                    { required: true, message: '用户名不能为空', trigger: 'blur' },
                    { type: 'string', min: 8, message: '用户名不得少于8位', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '密码不能为空', trigger: 'blur' },
                    { type: 'string', min: 6, message: '密码不得少于6位', trigger: 'blur' }
                ]
            }
        }
    },
    methods: {
        handleStatus(val) {
            this.form.username = ''
            this.form.password = ''
            this.$emit('handleStatus', val)
        },
        async submit() {
            // let { username, password } = this.form
            // if (!username || !password) return this.$Message.warning('请填写完整信息')
            // let { status, message } = await this.$api.post('/user/login', {
            //     username: username,
            //     password: password
            // })
            // if (status !== 0) return this.$Message.error(message)
            // this.$refs.form.resetFields()
            // this.$Message.success(message)
            this.$router.push('/')
        }
    }
}
</script>