<template>
     <div class="w-500 h-600 m-v-50 m-h-20">
           <Form  label-position="left" :label-width="100" v-if="isShow">
               <FormItem label="name" prop="name">
                   <Input v-model="formValidate.name" class="w-300" />
               </FormItem>
               <FormItem label="reason" prop="reason">
                    <Input v-model="formValidate.reason" class="w-300" />
               </FormItem>
               <FormItem label="deadline" prop="deadline">
                     <Input v-model="formValidate.deadline" class="w-300" />
               </FormItem>
               <FormItem label="Date" >
                    <Row>
                       <Col span="11" />
                       <FormItem prop="date">
                          <DatePicker type="date" placeholder="Select date" v-model="formValidate.date"></DatePicker>
                       </FormItem>
                      <Col span="2" style="text-align: center" />
                      <Col span="11" />
                      <FormItem prop="time">
                         <TimePicker type="time" placeholder="Select time" v-model="formValidate.time"></TimePicker>
                      </FormItem>
                    </Row>
                </FormItem>
                <FormItem>
                    <Button type="primary" @click="handleSubmit('formValidate')">Submit</Button>
                    <Button @click="handleReset('formValidate')" style="margin-left: 8px">Reset</Button>
                </FormItem>
            </Form>
        </div>
</template>
<script>
export default {
    data() {
        return {
            isShow: false,
            formValidate: {
                name: "",
                reason: "",
                deadline: "",
                time: "",
                date: ""
            },
            rules: {
                name: [ { required: true, message: 'The name cannot be empty', trigger: 'blur' } ],
                reason: [ { required: true, message: 'The reason cannot be empty', trigger: 'blur' } ],
                deadline: [ { required: true, message: 'The deadline cannot be empty', trigger: 'blur' } ],
                date: [ { required: true, type: "date",message: "Please select the date",trigger: "change" }],
                time: [ { required: true, type: "string", message: "Please select time", trigger: "change"}],
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