<template>
    <div  class="w-500 h-600 m-v-50 m-h-20 flex j-center">
        <Form class="m-t-40">  
              <FormItem label="name" prop="name">
                   <Input v-model="form.name" class="w-300 m-h-5" />
               </FormItem>
               <FormItem label="advice" prop="advice" class="text-hidde">
                     <Input v-model="form.advice" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..."/>
               </FormItem>
               <FormItem label="time" prop="time">
                     <Input v-model="form.time" class="w-300 " />
               </FormItem>
               <FormItem class="m-l-100">
                    <Button type="primary" @click="handleSubmit('form')">Submit</Button>
                    <Button @click="handleReset('form')" style="margin-left: 8px">Reset</Button>
                </FormItem>
        </Form>
    </div>
</template>
<script>
export default {
    data() {
        return {
            form: {
                name: "",
                time: "",
                advice: ""
            },
            rules: {
                name: [ { required: true, message: 'The name cannot be empty', trigger: 'blur' } ],
                advice: [ { required: true, message: 'The advice cannot be empty', trigger: 'blur' } ],
                time: [ { required: true, message: 'The time cannot be empty', trigger: 'blur' } ],
            }
        }
    },
    methods: {
          handleSubmit (name) {
            this.$refs[name].validate((valid) => {
                if (valid) {
                     this.$Message.success('Success!');
                } else {
                     this.$Message.error('Fail!');
                    }
            })
        },
        handleReset (name) {
            this.$refs[name].resetFields();
        }
    }
}
</script>