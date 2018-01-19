<template>
 <div class="hangqing-detail">
   <div class="box">
     <div class="item">
       <span class="titile">全市均价</span>
       <div class="info-text">
         <countTo :startVal='startVal' :endVal='endVal' :duration='3000'></countTo>
         <span class="danwei">元/平米</span>
       </div>

       </div>
     <div class="item">
       <span class="titile">12月珠江成交量</span>
       <div class="info-text">
         <countTo :startVal='startVal' :endVal='salesSum' :duration='3000'></countTo>
         <span class="danwei">套</span>
       </div>
     </div>
   </div>
 </div>
</template>

<script type="text/ecmascript-6">
  import countTo from 'vue-count-to'
  export default {
  name:'',
  components:{
    countTo
   },
  data(){
     return{
       startVal: 0,
       endVal: 29580,
       salesSum:888
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
  .box{
    display: flex;
    align-content:center;
    .item{
      flex: 1;
      flex: 0 0 50%;
      align-self: center;
      text-align: left;
      padding-top: 15px;
    }
    .titile{
      display: block;
      font-size: 12px;
      color:$text;
    }
    .info-text{
      font-size: 30px;
      padding-top: 10px;
    }
    .danwei{
      font-size: 14px;
    }
  }
</style>
