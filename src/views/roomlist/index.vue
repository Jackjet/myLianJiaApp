<template>
 <div class="room-warpper">
   <div class="header topheader" v-if="showheader">
     <div class="h-title item">
       猜你喜欢
     </div>
     <div class="select-query item2">
       <div class="item" v-for="(item,index) in selectQuery" :key="index"
            :class="{ active: isActive === index }"
            @click.stop="selectTypeRoom(item,index)">{{item}}</div>
     </div>
   </div>
   <!--//无限滚动-->
   <div class="list">
     <div  v-for="(item,index) in dataList" :key="index">
       <router-link class="list-item" :to="{ name: 'detail', params: { id: item.id }}">
         <div class="img">
           <img v-lazy="item.img" >
         </div>
         <div class="list-info">
           <header class="header">
             {{item.title}}
           </header>
           <span class="sub-titile">
           {{item.subtitile}}
         </span>
           <div class="btn-groups">
             <sbadege size="small" type="error" v-if="item.tag.full">满5年</sbadege>
             <sbadege size="small" type="success" v-if="item.tag.randomTime">随时可看</sbadege>
             <sbadege size="small" v-if="item.tag.trace">地铁</sbadege>
           </div>
           <div class="zj-warpper">
           <span class="zujin">
           {{item.totalPrice}}
         </span>
             <span class="mianji">
           {{item.price}}
         </span>
           </div>
         </div>
       </router-link>
     </div>
   </div>
 </div>
</template>

<script type="text/ecmascript-6">
  import sbadege from '@/components/sbadege'
  export default {
  name:'',
  components:{
    sbadege
   },
  props:{
    dataList:{
      type:Array,
      deafault:[]
    },
   showheader:{
      type:Boolean,
      default:true
    }
  },
  data(){
     return{
       subtitile:"63.5/南低楼层共9层",
       isActive:0,
       selectQuery:['二手房','新房','租房']
     }
   },
   created(){
   },
   mounted(){
   },
   computed: {
   },
   methods: {
     selectTypeRoom(item,index){
       this.isActive = index
       this.$emit("changeType",item)
     }
   }
  }
</script>
<style scoped lang="scss" rel="stylesheet/scss">
  @import '../../styles/variables.scss';
  @import '../../styles/mixin.scss';
  .room-warpper{
    margin-bottom: 50px;
  }
  .topheader{
    display: flex;
    justify-content:space-between;
    margin-bottom: 20px;
    .h-title{
      font-size: 18px;
    }

    .select-query{
      display: flex;
      font-size: 14px;
      width: 3rem;
      .active{
        color:$blue;
      }
      .item{
        flex: 1;
        flex: 0 0 33%;
        text-align: center;
      }
    }
  }
  .list-item{
    display: flex;
    margin:12px 0 12px 0;
    @include border-1px($line);
    .img{
      flex: 0 0 100px;
      width: 100px;
      img{
        border:none;
        height: 86px;
        width: 100px;
      }
    }
  }
  .list-info{
    padding-left: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex: 1;
    overflow: hidden;
    line-height: 22px;
    .header{
      color: $black;
      font-size: 16px;
    }
    .sub-titile{
      font-size: 10px;
      color:$text;
    }
    .zj-warpper,.btn-groups{
      font-size: 0;
    }
    .zujin{
      font-size: 14px;
      color:$red;
    }
    .mianji{
      margin-left: 5px;
      font-size: 12px;
      color: $text;
    }
  }
</style>
