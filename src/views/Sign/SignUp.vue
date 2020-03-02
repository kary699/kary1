<template>
	<div class="max-w-1200 w-full h-full flex j-between a-center m-auto p-h-50">
		<div class="w-400 h-full flex j-center p-v-80">	
			<Form ref='form' :model="form" :rules="rules" class='max-w-300 w-full'>	
				<h1 class="text-center text-main-black "> Sign Up</h1>
                <FormItem prop="number">
                    <Input prefix="ios-contact-outline" 
                        class="border-main"
                        size="large"
                        @keyup.enter.native="submit()"
                        placeholder="请输入学号"
                        v-model="form.number"/>
                </FormItem>
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
                     size="large" @click="isShow()">next</Button>
				</FormItem>
                <div v-if="isHidden">
                    <FormItem prop="password">
                        <Input prefix="ios-unlock-outline" 
                            size="large"
                            type="password"
                            password
                            @keyup.enter.native="submit()"
                            placeholder="请输入密码"
                            v-model="form.password"/>
                    </FormItem>
                    <FormItem prop="repassword">
                        <Input prefix="ios-unlock-outline" 
                            size="large"
                            type="password"
                            password
                            @keyup.enter.native="submit()"
                            placeholder="确认密码"
                            v-model="form.password"/>
                   </FormItem>
                   <FormItem>
                        <Button type="primary" 
                                class="w-full bg-main text-main-yellow" 
                                size="large" 
                                @click="isJudge()">Sign up</Button>
                    </FormItem>
                </div>
            <div class="flex j-between">
                <span></span>
                <router-link to="/signin" class="fs-13 m-r-20">sign in</router-link>
            </div>
			</Form>
		</div>       
		<div class="max-w-800 w-full h-full bg-sign"></div>
	</div>
</template>
<script>
export default {
    data() {
        return {
            isHidden: false,
            form: {
                number: '',
				phonenumber: '',
				proof: '',
                password: '',
                repassword: ''
            },
            rules: {
                number: [
                    { required: true, message: '学号不能为空', trigger: 'blur' },
                    { type: 'string', min: 13, message: '学号不得少于13位', trigger: 'blur' }
                ],
                phonenumber: [
                    { required: true, message: '手机号码不能为空', trigger: 'blur' },
                    { type: 'string', min: 11, message: '请确认手机号 ', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '密码不能为空', trigger: 'blur' },
                    { type: 'string', min: 6, message: '密码不得少于6位', trigger: 'blur' }
                ],
                proof: [
                    { required: true, message: '验证码不能为空', trigger: 'blur' },
                    { type: 'string', min: 6, message: '', trigger: 'blur' }
                ]
            }
        }
    },
    methods: {
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
        },
        isShow() {
            this.isHidden = !this.isHidden
        },
        isJudge() {
            let { number, phonenumber, proof, password } = this.form
            if (password !== repassword) return this.$Message.warning('请确认密码')
        }
    }
}
</script>

