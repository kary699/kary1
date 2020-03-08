<template>
    <div class=" w-full h-500 flex j-start min-w-1200 m-t-20">
        <div class="w-300 h-full  b-white border b-r-8 m-l-10 flex-column o-y-scroll scroll-css" v-for="(item, itemindex) in ModuleList" :key="itemindex">
           <div  class="flex j-between">
               <div class="h-80 fs-18  p-20"> {{item.ProModule}}</div>
               <div class="m-t-20 m-r-10">
                  <Icon type="ios-add" class="fs-30 cursor-pointer" @click="addPerson()" />
                  <Icon type="ios-code-working" class="fs-30 cursor-pointer"/>
               </div>
           </div>
           <div class="bg-white h-100 w-250 m-l-20 b-r-8 shadow-hover m-t-10" v-for="(list, index) in PersonList" :key="index">
              <p class="h-30 w-100 b-r-20 p-t-4 text-center fs-15" :class="[index == 0 ? 'isblue ': (index == 1 ? 'isgreen' :'isyellow')]">{{list.ProLeader}}</p>
              <p class="m-l-10">{{list.ProPartner}}</p>
              <p class="m-l-10 text-grey m-t-20">{{list.ProTime}}</p>
           </div>
           <div class="flex a-center j-center h-40 m-t-50">
              <Icon type="ios-add" class="fs-30 cursor-pointer" @click="addModule()" />
         </div>
     </div>
</div>
</template>
<script>
export default {
    data() {
        return {
            ModuleList: [
                {
                   ProModule: '项目模块',
                },
                {
                   ProModule: '项目模块2',
                }
            ],
            PersonList: [
                {
                   ProLeader: '模块负责人',
                   ProPartner: '合伙人',
                   ProTime: '周一',
                },
                {
                   ProLeader: '22',
                   ProPartner: '33',
                   ProTime: '周二',
                },
                 {
                   ProLeader: '22',
                   ProPartner: '33',
                   ProTime: '周三',
                }
            ]
        }
    },
    methods: {
        addModule() {
            this.ModuleList.push({
                 ProModule: '项目模块3',
            })
        },
        addPerson() {
            this.PersonList.push({
                  ProLeader: '33',
                  ProPartner: '44' ,
                  ProTime: '周三',
                  
            }),
            this.index--
        }
    }
}
</script>
<style lang="scss" scoped>
.isblue {
    background-color: rgb(117, 149, 236);
}
.isgreen {
    background-color:rgb(13, 148, 13);
}
.isyellow {
    background-color:rgb(241, 220, 24);
}
</style>