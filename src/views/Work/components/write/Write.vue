<template>
  <div class="w-full h-full">
    <div class="w-500 h-full b-r-5 shadow-grey absolute transition" v-if="status">
       <Select v-model="model1" style="width:100px" class="pull-right">
          <Option v-for="item in optionList" :value="item.value" :key="item.value " @keydown.enter="showLeave()">{{ item.label }}</Option>
       </Select>
       <Leave ref="leave"/>
       <Advice/>    
    </div>
  </div>
</template>
<script>
import Leave from './components/Leave'
import Advice from './components/Advice'
export default {
  components: {
    Leave,
    Advice
  },
  data() {
    return {
      status: false,
      optionList: [
        {
          value: "请假",
          label: "请假"
        },
        {
          value: "建议",
          label: "建议"
        },
        {
          value: "其他",
          label: "其他"
        }
      ],
      model1: "",    
    }
  },
  methods: {
    showWrite() {
      this.status = !this.status;
    },
    showLeave(){
      if(this.items.value="请假"){
        this.$refs.leave.isShowleave
      }
      
    }  
  }
}
</script>
<style lang="scss" scoped>
</style>