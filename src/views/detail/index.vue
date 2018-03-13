<template>
 <div class="home-detail">
   <div class="swipe-wrapper">
     <mt-swipe :show-indicators="false" :auto="0">
       <mt-swipe-item v-for="(item,index) in dataList" :key="index">
         <img class="swipe-item-img"  v-lazy="item.url">
       </mt-swipe-item>
     </mt-swipe>
   </div>
   <div class="content-body">
     <div class="title">{{houseItem.title}}</div>
     <div class="house-info flex-box">
       <div class="flex-item item-property">
         <span class="title">售价</span>
         <span class="item-info">{{houseItem.totalPrice}}</span>
       </div>
       <div class="flex-item item-property">
         <span class="title">房型</span>
         <span class="item-info item-property">{{houseItem.roomType}}</span>
       </div>
       <div class="flex-item item-property">
         <span class="title">建筑面积</span>
         <span class="item-info">{{houseItem.squerySize}}</span>
       </div>
     </div>
     <div class="house-info-detail">
       <div class="content-list flex-box">
         <div class="flex-item">
           <span class="list-title">单价:</span>
           <span class="list-item-info">{{houseItem.price}}</span>
         </div>
         <div class="flex-item">
           <span class="list-title">挂牌:</span>
           <span class="list-item-info">{{houseItem.guapai}}</span>
         </div>
       </div>
       <div class="content-list flex-box">
         <div class="flex-item">
           <span class="list-title">朝向:</span>
           <span class="list-item-info">{{houseItem.chaoxiang}}</span>
         </div>
         <div class="flex-item">
           <span class="list-title">楼层:</span>
           <span class="list-item-info">{{houseItem.louchen}}</span>
         </div>
       </div>
       <div class="content-list flex-box">
         <div class="flex-item">
           <span class="list-title">楼型:</span>
           <span class="list-item-info">{{houseItem.louxing}}</span>
         </div>
         <div class="flex-item">
           <span class="list-title">电梯:</span>
           <span class="list-item-info">{{houseItem.dianti}}</span>
         </div>
        </div>
       <div class="content-list flex-box">
         <div class="flex-item">
           <span class="list-title">装修:</span>
           <span class="list-item-info">{{houseItem.zhuangxiu}}</span>
         </div>
         <div class="flex-item">
           <span class="list-title">年代:</span>
           <span class="list-item-info">{{houseItem.niandai}}</span>
         </div>
       </div>
       <div class="content-list flex-box">
         <div class="flex-item">
           <span class="list-title">用途:</span>
           <span class="list-item-info">{{houseItem.yongtu}}</span>
         </div>
         <div class="flex-item">
           <span class="list-title">权属:</span>
           <span class="list-item-info">{{houseItem.quanshu}}</span>
         </div>
       </div>
       <div class="content-list">
         <div class="single-item">
           <span class="list-title">房源编码:</span>
           <span class="list-item-info">{{houseItem.fangyuanbianma}}</span>
         </div>
       </div>
       <div class="content-list">
         <div class="single-item">
           <span class="list-title">有效期:</span>
           <span class="list-item-info">{{houseItem.youxiaoqi}}</span>
         </div>
       </div>
       <div class="content-list">
         <div class="single-item">
           <span class="list-title">首付预算:</span>
           <span class="list-item-info">{{houseItem.shoufuyusuan}}</span>
         </div>
       </div>
       <div class="content-list">
         <div class="single-item">
           <span class="list-title">小区:</span>
           <span class="list-item-info">{{houseItem.xiaoqu}}</span>
         </div>
       </div>
     </div>
   </div>
 </div>
</template>

<script type="text/ecmascript-6">
  const  url1='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1520933055025&di=c21cf0eab87a2cfba7c088d44ef4548f&imgtype=0&src=http%3A%2F%2Fpic.tugou.com%2FDT%2F1456967467_358787.jpg'
  const  url2='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1520933055025&di=1aaa26427e991df50961694f91e7abdc&imgtype=0&src=http%3A%2F%2Fimg.taopic.com%2Fuploads%2Fallimg%2F110317%2F119-11031F3193493.jpg'
  const url3='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1520933055024&di=1a5981007320f2137819b9b82185532f&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F37d3d539b6003af36dd1134d3e2ac65c1038b6b0.jpg'
  import {getHouseDetai} from '@/api/remoteSearch'
  export default {
  name:'',
  components:{
   },
  data(){
     return{
      houseId:'',
      houseItem:'',
       dataList:[
         {url:url1},
         {url:url2},
         {url:url3},
       ]
     }
   },
   created(){

    this.houseId = this.$route.params.id
    this.getHouseDetai(this.houseId)
   },
   mounted(){
   },
   computed: {
   },
   methods: {
     getHouseDetai(id){
       getHouseDetai(id).then(res=>{
          this.houseItem = res.data.item[0]
       })
     }
   }
  }
</script>
<style scoped lang="scss" rel="stylesheet/scss">
  @import '../../styles/variables.scss';
  @import '../../styles/mixin.scss';
  .swipe-wrapper{
    height:5rem;
  }
  .swipe-item-img{
    height: 5rem;
    width: 100%;
  }
  .content-body{
    padding:10px;
    .title{
      padding:10px 0;
      font-size: $font-size-large-x;
      color: $black;
    }
    .house-info{
      border-top:1px solid $line;
      border-bottom:1px solid $line;
    }
    .flex-box{
      padding:10px 0;
      .title{
        display: block;
        padding: 5px 0;
        color:$text2;
        font-size: $font-size-small;
      }
    }

    .item-info{
      display: block;
      color:$red;
      font-size: $font-size-large;
    }
  }
  .flex-box{
    @include flex-box();
    .item-property:last-child{
      margin-right: 0;
      border-right:none;
    }
  }
  .flex-item{
    margin-right: 10px;
    @include flex-item();
  }
  .item-property{
    border-right:1px solid $line;
  }
  .house-info-detail{
    .content-list{
      font-size: 0;
      padding:8px 0;
      .list-title{
        display: inline;
        padding: 5px 0;
        color:$text2;
        font-size: $font-size-medium;
      }
      .list-item-info{
        display: inline-block;
        margin-left: 5px;
        color:$black;
        font-size: $font-size-medium-x;
      }
    }
  }

</style>
