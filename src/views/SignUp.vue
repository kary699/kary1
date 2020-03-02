<template>
	<div class="max-w-1200 w-full h-full m-h-30 flex j-between a-center">
		<div class="w-600 h-full flex j-center p-v-80">	
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
				 <FormItem prop="pnonenumber">
                    <Input prefix="ios-call-outline"
                        size="large"
                        @keyup.enter.native="submit()"
                        placeholder="请输入手机号"
                        v-model="form.phonenumber"/>
                </FormItem>
				<FormItem prop="proof">
                  <Input   
					placeholder="请输入验证码" class=" w-150"/> 
					<Button type="primary" ghost class='p-h-20 m-h-15'>发送验证码</Button>
                </FormItem>
				<FormItem>
					<Button type="primary" ghost class="w-full bg-main text-main-yellow"
                     size="large" @click="show()">submit</Button>
				</FormItem>
                <div v-show="ishidden">   
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
                </div>
				<div>
					<router-link to="/signin" class="fs-13 m-r-20">
					  <Button type="primary" class="w-full bg-main text-main-yellow" size="large"
					 @click="judge()">sign in</Button>
					</router-link>
				</div>
			</Form>
		</div>
        
        
		<div class="max-w-800 w-600 h-600 m-h-80 signup"></div>
	</div>
</template>
<script>
export default {
    data() {
        return {
            ishidden:'true',
            form: {
                number: '',
				phonenumber: '',
				proof: '',
                password:'',
                repassword:''
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
         show(){
            this.ishidden=false
        },
        judge(){
            let {number,phonenumber,proof,password} = this.form
            if (password!==repassword) return this.$Message.warning('请确认密码')
        }
    }
}
</script>
<style >
    .signup{
		 background: url(../assets/sign.png) no-repeat;
		 background-size: cover;
       
	}

</style>

