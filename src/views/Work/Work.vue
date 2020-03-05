<template>
      <div class=" w-full h-full flex j-center a-center absolute"> 
             <Write ref="write"/>
             <List/>
         <div class="w-200 h-200 m-v-90 absolute">
            <Button type="info" size="large" ghost class="m-t-80"> 审批</Button>
            <Button type="info" size="large" ghost  @click="isShow()">请假</Button>
        </div>
    </div>             
</template>
<script>
import Write from './components/write/Write'
import List from './components/List'
export default {
    components: {
        Write,
        List
    },
    data() {
        return {

        }
    },
    methods: {
        isShow(){
            this.$refs.write.showWrite()
        }
    }
    
}
</script>