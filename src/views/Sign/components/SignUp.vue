<template>
    <Form ref='form' :model="form" :rules="rules" class='max-w-300 w-full open-panel'>	
        <h1 class="text-center text-main-black ">Sign Up</h1>
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
                <Button type="primary" ghost class='p-h-20 m-h-15' @click="sendCode()">{{codeMsg}}</Button>
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
            codeMsg: '发送验证码',
            isChange: true,
            form: {
                number: '',
                phonenumber: '',
                proof: '',              
            },
            rules: {
                number: [
                    { required: true, message: '学号不能为空', trigger: 'blur' },
                    { type: 'string', min: 13, message: '学号不得少于13位', trigger: 'blur' }
                ],
                phonenumber: [
                    { required: true, message: '手机号码不能为空', trigger: 'blur' },
                    { type: 'string', min: 11, message: '请确认手机号长度 ', trigger: 'blur' }
                ],
                proof: [
                    { required: true, message: '验证码不能为空', trigger: 'blur' }
                ]
            }
        }
    },
    methods: {
        handleStatus(val) {
            this.form.number = ''
            this.form.phonenumber = ''
            this.form.proof = ''
            this.$emit('handleStatus', val)
        },
        sendCode() {
            if (!this.isChange) return this.$Message.warning('稍后再试哦~')
            this.isChange = !this.isChange
            let time = 60
            let self = this
            let timer = setInterval(() =>{
                if (time !== 0) {
                    time--
                    self.codeMsg = `${time} 秒`
                    return
                }
                self.isChange = !self.isChange
                self.codeMsg = '发送验证码'
                clearInterval(timer)
            }, 1000)
        }
    }
}
</script>