<template>
    <div class="min-w-1200 h-80 flex-column shadow-grey-inset">
        <div class="h-40 fs-20 flex j-between m-t-10">
           <div  class="w-500 m-l-15">
               <p>{{Message}}
                   <span class="d-inline-block m-l-20  cursor-pointer">
                       <Icon type="ios-contacts" />{{Person}}
                    </span>
                </p>
           </div>
           <div class="w-200 ">
                <span  class="d-inline-block fs-16  text-grey p-3">
                   <Icon type="ios-information-circle-outline" class="fs-25 m-b-4 cursor-pointer" />信息
                </span>
                <span  class="d-inline-block fs-16  text-grey p-3">
                   <Icon type="ios-stats-outline" class="fs-25 m-b-4 cursor-pointer" />进展
                </span>
                <span  class="d-inline-block fs-16  text-grey p-3">
                    <Icon  type="ios-settings-outline"  class="fs-25 m-b-4 cursor-pointer" />设置
               </span>       
           </div>          
        </div>
        <div class="h-30 p-3 m-l-10">
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