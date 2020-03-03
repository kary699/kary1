<template>
    <div>
        <div class="w-full h-full bg-black zIndex-999 absolute">
            <div class="w-300 h-300 border m-auto b-r-10 m-t-100">
                <Form ref="form" :model="form" :rules="rules" class="max-w-300 w-full open-panel m-t-10">
                    <FormItem prop="username">
                        <Input prefix="ios-contact-outline" 
                         class="border-main bg-none"
                         size="large"
                         @keyup.enter.native="submit()"
                         placeholder="请输入用户名"
                         v-model="form.username"/>
                   </FormItem>
                   <FormItem prop="nickname">
                        <Input prefix="ios-contact-outline" 
                         class="border-main  bg-none"
                         size="large"
                         @keyup.enter.native="submit()"
                         placeholder="请输入昵称"
                         v-model="form.nickname"/>
                   </FormItem>
                   <FormItem prop="major">
                        <Input prefix="md-contacts" 
                         size="large"
                         class="border-main bg-none"
                         major
                         @keyup.enter.native="submit()"
                         placeholder="请输入专业"
                         v-model="form.major"/>
                   </FormItem>
                        <Select v-model="model1" style="width:200px">
                        <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                  </Select>
                  <FormItem>
                         <Button type="text" ghost class="w-full m-t-20" size="large" @click="submit()">确认</Button>
                  </FormItem>      
               </Form>
            </div>
        </div>
    </div> 
</template>
<script>
export default {
    data() {
        return {
            form: {
                username: '',
                nickname: '',
                major: ''
            },
            rules: {
                username: [
                    { required: true, message: '用户名不能为空', trigger: 'blur' },
                    { type: 'string', min: 8, message: '用户名不得少于8位', trigger: 'blur' }
                ],
                nickname: [
                    { required: true, message: '昵称不能为空', trigger: 'blur' },
                    { type: 'string', min: 6, message: '', trigger: 'blur' }
                ],
                major: [
                    { required: true, message: '专业不能为空', trigger: 'blur' },
                    { type: 'string', min: 6, message: '', trigger: 'blur' }
                ]
            },
            cityList: [
                    {
                        value: 'Web',
                        label: 'Web'
                    },
                    {
                        value: 'python',
                        label: 'python'
                    },
                    {
                        value: 'php',
                        label: 'php'
                    },                 
             ],
              model1: ''
        }
    },
    methods: {
        submit() {
                       
        }
    }
}
</script>