<template>
 <div class="price-wrapper">
  <header class="p-header">
    价格区间(万)
  </header>
   <div class="price-range box" ref="box">
     <div class="item  border-1px">
       <mt-field type="number" placeholder="最低价格" v-model="upNumber" class="input-item"></mt-field>
     </div>
     <div class="item  tag">-</div>
     <div class="item  border-1px">
       <mt-field type="number" placeholder="最高价格" class="input-item" v-model="downNumber"></mt-field>
     </div>
   </div>
   <div class="bottons-wrapper">
     <selctbottone :data-list="dataList"></selctbottone>
   </div>
 </div>
</template>

<script type="text/ecmascript-6">
  import Selctbottone from '@/components/Selectbutton'
  export default {
  name:'',
  components:{
    Selctbottone
   },
  data(){
     return{
       upNumber:'',
       downNumber:'',
       dataList:['100万以下','200万以下','300万以下','400万以下','500万以下','1600万以下']
     }
   },
   created(){

   },
   mounted(){
     let inputDom = this.$refs.box.getElementsByClassName("mint-cell-wrapper")
     //（js原生）性能比较好的遍历方法
     for(let j = 0,len=inputDom.length; j < len; j++) {
       inputDom[j].setAttribute('style','background-image:none;font-size:12px')
     }
   },
   computed: {
   },
   methods: {
   }
  }
</script>
<style scoped lang="scss" rel="stylesheet/scss">
  @import '../../../styles/variables';
  @import '../../../styles/mixin.scss';
  .p-header{
    font-size: $font-size-medium-x;
    color: $text2;
    padding:10px 0;
  }

  .box{
    display: flex;
    align-items: center;
    align-content: center;
    color: $text2;
  }
  .item{
    flex: 10;
    text-align: center;
    font-size: $font-size-small;
    border:1px solid $line;
  }
  .tag{
    flex: 2;
    border:none;
  }
  .mint-cell{
    font-size: $font-size-small;
     min-height: 35px;
  }
  .mint-cell:last-child{
    background-image:none;

  }

</style>
