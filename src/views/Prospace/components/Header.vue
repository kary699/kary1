<template>
    <div class="relative top-6 left-0 min-w-1200 h-80 zIndex-9">
        <div class="bold fs-20 absolute left-20">
            <p class="w-500">{{Message}}
                <span class="d-inline-block m-l-20  cursor-pointer"><Icon type="ios-contacts" />{{Person}}</span>
            </p>
        </div>
        <div class="flex j-end  w-full">
            <div  class="w-700 p-20  cursor-pointer">
                <span  class="d-inline-block fs-16  text-grey p-3">
                   <Icon type="ios-information-circle-outline" class="fs-25 m-b-4" />信息
                </span>
                <span  class="d-inline-block fs-16  text-grey p-3">
                   <Icon type="ios-stats-outline" class="fs-25 m-b-4" />进展
                </span>
                <span  class="d-inline-block fs-16  text-grey p-3">
                    <Icon  type="ios-settings-outline"  class="fs-25 m-b-4" />设置
               </span>
            </div>          
        </div>
         <div class="w-full h-20 text-grey mtop m-l-20 fs-16 absolute">
            <span class="p-8 cursor-pointer">看板</span>
            <span class="p-8 cursor-pointer">时间线</span>
            <span class="p-8 cursor-pointer">文档</span>
            <span class="p-8 cursor-pointer">文件</span>
        </div> 
    </div>
</template>
<script>
export default {
    data() {
        return {
            Message: '项目名称',
            Person:  '项目人员'
        }
    }
}
</script>
<style scoped>
.mtop {
    margin-top: -30px;
}
</style>