<template>
	<div class="max-w-1200 w-full h-full m-h-100 flex j-between a-center">
		<div style="w-600 h-full flex j-center a-center">	
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
					placeholder="请输入验证码" class=" w-120"/> 
					<Button type="primary" ghost class='p-h-20'>发送验证码</Button>
                </FormItem>

				<FormItem>
					<Button type="primary" ghost class="w-full bg-main text-main-yellow" size="large">submit</Button>
				</FormItem>
				<div>
					<router-link to="/signin" class="fs-13 m-r-20">
					  <Button type="primary" class="w-full bg-main text-main-yellow" size="large"
					 @click="submit()">sign in</Button>
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
            form: {
                number: '',
				phonenumber: '',
				proof: ''
            },
            rules: {
                number: [
                    { required: true, message: '学号不能为空', trigger: 'blur' },
                    { type: 'string', min: 13, message: '学号不得少于13位', trigger: 'blur' }
                ],
                phonenumber: [
                    { required: true, message: '手机号码不能为空', trigger: 'blur' },
                    { type: 'string', min: 11, message: ' ', trigger: 'blur' }
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

