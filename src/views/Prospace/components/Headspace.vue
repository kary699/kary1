<template>
    <div class="min-w-1200 h-80 flex-column shadow-grey-inset bg-grey">
        <div class="h-40 flex j-between m-t-10">
           <div  class="w-500 m-l-15 fs-20 ">
               <p> <span class="d-inline-block m-r-20 bold">{{Message}}</span>
                   <span class="d-inline-block  cursor-pointer" v-for="(item,index) in imgList" :key="index">
                        <img :src="item.imgSrc" alt="#" class="b-round w-25 h-25 shadow-hover">
                    </span>
                </p>
           </div>
           <div class="w-250 ">
                <span  class="d-inline-block text-grey p-10 fs-4">
                   <Icon type="ios-information-circle-outline" class="fs-20 m-b-4 cursor-pointer" />
                   信息
                </span>
                <span  class="d-inline-block  text-grey p-10">
                   <Icon type="ios-stats-outline" class="fs-20 m-b-4 cursor-pointer" />
                   进展
                </span>
                <span  class="d-inline-block  text-grey  p-10">
                    <Icon  type="ios-settings-outline"  class="fs-20 m-b-4 cursor-pointer" />
                    设置
               </span>       
           </div>          
        </div>
        <div class="h-30  m-l-10 text-grey">
            <span class="p-15 cursor-pointer hover-color">看板</span>
            <span class="p-15 cursor-pointer hover-color">时间线</span>
            <span class="p-15 cursor-pointer hover-color">文档</span>
            <span class="p-15 cursor-pointer hover-color">文件</span>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            Message: '项目名称',
            Person:  '项目人员',
            imgList: [
                {
                    imgSrc: require('../../../assets/photo1.png')
                },
                {
                    imgSrc: require('../../../assets/photo2.jpg')
                },
                {
                    imgSrc: require('../../../assets/photo3.jpg')
                }
            ]
        }
    }
}
</script>
<style lang="scss" scoped>
.hover-color{
     &:hover {
        color: #000;
        font-weight: bold;
    }
}
</style>