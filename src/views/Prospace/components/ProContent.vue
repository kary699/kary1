<template>
    <div class=" w-full hight flex j-start min-w-1200 m-t-20 flex-wrap">
        <div class="w-300 h-full  b-white border b-r-8 m-l-40 flex-column o-y-scroll scroll-css bg-grey"
         v-for="(item, itemindex) in moduleList" :key="itemindex">
           <div  class="flex j-between ">
               <div class="h-50 p-20">
                   <span class="deepgrey d-inline-block w-20 h-20 b-round text-center text-white fs-4 m-r-10">
                       {{personList.length}}
                    </span> 
                   <span class="fs-18 d-inline-block">{{item.proModule}}</span>
               </div>
               <div class="m-t-20 m-r-10">
                  <Icon type="ios-add" class="fs-30 cursor-pointer" @click="addPerson()" />
                  <Icon type="ios-code-working" class="fs-30 cursor-pointer"/>
                  <Addperson ref="addperson" />
               </div>
           </div>
           <div class="bg-white h-100 w-260 m-l-6 b-r-8 shadow-hover m-t-10" v-for="(list, index) in personList" :key="index">
              <p class="h-30 w-100 b-r-20 p-t-4 text-white text-center fs-15" :class="[index == 0 ? 'bg-blue ': (index == 1 ? 'bg-green' :'bg-yellow')]">
                  {{list.proLeader}}
              </p>
              <p class="m-l-10 bold">{{list.proPartner}}</p>
              <p class="m-l-10 text-grey m-t-20" >{{list.proTime}}                
                   <img :src="list.imgSrc" alt="#" class="b-round w-25 h-25 pull-right m-r-10">
              </p>
           </div>
           <div class="flex a-center j-center h-40 m-t-10 b-r-8 w-260 m-l-6 hover-white">
              <Icon type="ios-add" class="fs-30 cursor-pointer" @click="addModule()" />
         </div>
     </div>
</div>
</template>
<script>
import Addperson from './Addperson'
export default {
    components: {
        Addperson
    },
    data() {
        return {
            moduleList: [
                {
                   proModule: '项目模块',
                },
                {
                   proModule: '项目模块2',
                }
            ],
            personList: [
                {
                   proLeader: '模块负责人',
                   proPartner: '合伙人',
                   proTime: '周一',
                   imgSrc: require('../../../assets/photo1.png')
                },
                {
                   proLeader: '22',
                   proPartner: '33',
                   proTime: '周二',
                   imgSrc: require('../../../assets/photo2.jpg')
                },
            ],
        }
    },
    methods: {
        addModule() {
            this.moduleList.push({
                 proModule: '项目模块3',
            })
        },
        addPerson() {
            this.$refs.addperson.isShow = !this.isShow
            this.personList.push({
                  ProLeader: '33',
                  ProPartner: '44' ,
                  ProTime: '周三',                
            })
        }
    }
}
</script>
<style lang="scss" scoped>
.hight {
    height: 450px;
}
.deepgrey {
    background-color: #ccc;
}
.hover-white {
    &:hover {
        background-color: #fff;
    }
}
</style>