<template>
 <div class="warpper">
   <div class="title">热门活动</div>
   <div class="hot-container">
     <mt-swipe :show-indicators="false" >
       <mt-swipe-item>
         <div class="item-box">
           <div class="item-img">
             <div class="img-container">
               <img :src="hotSales" alt="">
             </div>
             <span class="info-title">
               专业大咖置业分享会
             </span>
           </div>
           <div class="item-img">
             <div class="img-container">
               <img :src="hotSales" alt="">
             </div>
             <span class="info-title">
               专业大咖置业分享会
             </span>
           </div>
         </div>
       </mt-swipe-item>
       <mt-swipe-item>
         <div class="item-box">
           <div class="item-img">
              <div class="img-container">
                <img :src="hotSales2" alt="">
              </div>
             <span class="info-title">
               专业大咖置业分享会
             </span>
           </div>
           <div class="item-img">
             <div class="img-container">
               <img :src="hotSales2" alt="">
             </div>
             <span class="info-title">
               专业大咖置业分享会
             </span>
           </div>
         </div>
       </mt-swipe-item>
     </mt-swipe>
   </div>
 </div>
</template>

<script type="text/ecmascript-6">
  export default {
  name:'',
  components:{
   },
  data(){
     return{
       hotSales:"http://img4.imgtn.bdimg.com/it/u=1213964789,3201869121&fm=27&gp=0.jpg",
       hotSales2:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=154192136,3268555672&fm=27&gp=0.jpg"
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
  .warpper{
  }
  .title{
    font-size: 16px;
    font-weight: bold;
    padding-bottom: 10px;
  }
  .hot-container{
    width: 100%;
    height: 1.5rem;
  }
  .item-box{
    display: flex;
  }
  .item-box .item-img{
    position: relative;
    flex: 1;
    flex: 0 0 50%;
    align-self:center;
    text-align: center;
    &:first-child{
      padding-right: 5px;
    }
    &:last-child{
      padding-left: 5px;
    }
    img{
      position: relative;
      width: 100%;
      height: 1.5rem;
    }
    .img-container{
      position: relative;
      &::before{
        position: absolute;
        display: table;
        content: "";
        z-index: 9;
        width: 100%;
        height: 1.5rem;
        opacity: .2;
        background-color: #000;
      }
    }
    .info-title{
      position: absolute;
      z-index: 10;
      top: 40%;
      left: 50%;
      transform: translate3d(-50%,0,0) ;
      color:#fff;
      font-size: 14px;
    }
  }
</style>
