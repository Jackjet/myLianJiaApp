<template>
 <div class="price-wrapper">
   <header class="p-header">
     价格区间(万)
   </header>
   <div class="price-range box" ref="box">
     <div class="item  border-1px">
       <mt-field type="number" placeholder="最低价格" ref="up" v-model="upNumber" class="input-item"></mt-field>
     </div>
     <div class="item  tag">-</div>
     <div class="item  border-1px">
       <mt-field type="number" placeholder="最高价格" ref="down" class="input-item" v-model="downNumber"></mt-field>
     </div>
   </div>
 </div>
</template>

<script type="text/ecmascript-6">
  export default {
  name:'',
  components:{
   },
    props:{
      buttonselectFlag:{
        type:Number,
        default:0
      }
    },
  data(){
     return{
       onfocusUp:false,
       onfocusDonw:false,
       priceObj:{},
       upNumber:'',
       downNumber:'',
     }
   },
   created(){
   },
   mounted(){
     this.initCss()
   },
   computed: {
   },
   methods: {
     initCss(){
       let inputDom = this.$refs.box.getElementsByClassName("mint-cell-wrapper")
       //（js原生）性能比较好的遍历方法
       for(let j = 0,len=inputDom.length; j < len; j++) {
         inputDom[j].setAttribute('style','background-image:none;font-size:12px')
       }
     },
     emitData(){
       this.$emit('priceRange',this.priceObj)
     }
   },
    watch:{
      upNumber(v){
        if(v){
          //通过查看框架源码获知方法，这里（业务）限制只能输入整数
          this.$refs.up.currentValue = Math.floor(v)
          this.upNumber = this.$refs.up.currentValue
          this.priceObj.upPrice =  this.upNumber
          this.emitData()
        }
      },
      downNumber(v){
        if(v){
          this.$refs.down.currentValue = Math.floor(v)
          this.downNumber = this.$refs.down.currentValue
          this.priceObj.downPirce = this.downNumber
          this.emitData()
        }
      },
      // 只有传过来的值发生变化，才会执行
      buttonselectFlag(v){
        if(v){
          this.upNumber = this.downNumber = ''
        }
      }
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
