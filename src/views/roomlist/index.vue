<template>
 <div class="room-warpper">
   <div class="header topheader">
     <div class="h-title item">
       猜你喜欢
     </div>
     <div class="select-query item2">
       <div class="item" :class="{ active: isActive }">二手房</div>
       <div class="item">新房</div>
       <div class="item">租房</div>
     </div>
   </div>
   <div class="list">
     <div class="list-item" v-for="(item,index) in roomList" :key="index">
       <div class="img">
         <img :src="item.itemImgSrc" >
       </div>
       <div class="list-info">
         <header class="header">
           {{roomTitle}}
         </header>
         <span class="sub-titile">
           {{subtitile}}
         </span>
         <div class="btn-groups">
           <sbadege size="small" type="error">满5年</sbadege>
           <sbadege size="small" type="success">随时可看</sbadege>
           <sbadege size="small">地铁</sbadege>
         </div>
         <div class="zj-warpper">
           <span class="zujin">
           {{zujin}}
         </span>
           <span class="mianji">
           {{mianji}}
         </span>
         </div>
       </div>
     </div>
   </div>
 </div>
</template>

<script type="text/ecmascript-6">
  import sbadege from '@/components/sbadege'
  const imgSrc= "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3739955964,2895168016&fm=27&gp=0.jpg";
  export default {
  name:'',
  components:{
    sbadege
   },
  data(){
     return{
       subtitile:"63.5/南低楼层共9层",
       isActive:true,
       zujin:"666万",
       mianji:"3,8888元/平",
       imgSrc:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=579250810,1396895258&fm=27&gp=0.jpg",
       roomTitle:"广园新村云婉三街 2室1厅",
       roomList:[
         {
         test:'000',
         itemImgSrc:imgSrc,

         },
         {
           test:'000',
           itemImgSrc:imgSrc
         },
         {
           test:'000',
           itemImgSrc:imgSrc
         },
         {
           test:'000',
           itemImgSrc:imgSrc
         },
       ]
     }
   },
   created(){
   },
   mounted(){
   },
   computed: {
   },
   methods: {
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
