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
       <mt-cell v-for="n in 10" :title="'内容 ' + n" />
     </mt-tab-container-item>
     <mt-tab-container-item id="2">
       <mt-cell v-for="n in 4" :title="'测试 ' + n" />
     </mt-tab-container-item>
     <mt-tab-container-item id="3">
     <mt-cell v-for="n in 6" :title="'选项 ' + n" />
   </mt-tab-container-item>
     <mt-tab-container-item id="4">
       <mt-cell v-for="n in 6" :title="'选6项 ' + n" />
     </mt-tab-container-item>
   </mt-tab-container>
 </div>
</template>

<script type="text/ecmascript-6">
  export default {
  name:'',
  components:{
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
