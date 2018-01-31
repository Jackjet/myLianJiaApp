<template>
 <div class="room-tab">
   <mt-navbar v-model="selected">
     <mt-tab-item id="1">
       <span class="text">区域</span>
       <span class="text">
         <icon name="caret-down"></icon>
       </span>
     </mt-tab-item>
     <mt-tab-item id="2">
       <span class="text">价格</span>
       <span class="text">
         <icon name="caret-down"></icon>
       </span>
     </mt-tab-item>
     <mt-tab-item id="3">
       <span class="text">房型</span>
       <span class="text">
         <icon name="caret-down"></icon>
       </span>
     </mt-tab-item>
     <mt-tab-item id="4">
       <span class="text">更多</span>
       <span class="text">
         <icon name="caret-down"></icon>
       </span>
     </mt-tab-item>
   </mt-navbar>

   <!-- tab-container -->
   <mt-tab-container v-model="selected">
     <mt-tab-container-item id="1">
      <zone></zone>
     </mt-tab-container-item>
     <mt-tab-container-item id="2">
       <price></price>
     </mt-tab-container-item>
     <mt-tab-container-item id="3">
       <roomtype></roomtype>
   </mt-tab-container-item>
     <mt-tab-container-item id="4">
       <more></more>
     </mt-tab-container-item>
   </mt-tab-container>
 </div>
</template>

<script type="text/ecmascript-6">
  import { More, Price, Roomtype,Zone} from '@/components/Querypannel'
  export default {
  name:'',
  components:{
    More,
    Price,
    Roomtype,
    Zone
   },
  data(){
     return{
       selected: '1'
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
  @import '../../styles/variables';
  .mint-tab-item-label{
    .text{
      color:$text2;
      font-size:$font-size-medium ;
      margin-left: 5px;
    }
  }
  .mint-navbar .mint-tab-item.is-selected {
    .text{
      color:$blue;
    }
  }
</style>
