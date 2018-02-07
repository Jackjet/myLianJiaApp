<template>
 <div class="select-botton-wrapper">
   <div class="box">
     <div ref="item"  :class="{'item-4':col===4, 'item-3':col===3}"
          v-for="(item,index) in dataList"
          @click.stop="selectItem($event,item,index)" >
       {{item}}
     </div>
   </div>
   <div class="confirm-bottone-wrapper border-1px">
     <div class="b-box">
       <div class="b-item">不限条件</div>
       <div class="b-item b-comfirm" @click.stop="confirmHander">确定</div>
     </div>
   </div>
 </div>
</template>

<script type="text/ecmascript-6">
  import {hasClass,toggleClass} from '@/utils/dom'
  export default {
  name:'',
  components:{
   },
   props:{
    col:{
      type:Number,
      default:4
    },
    dataList:{
      type:Array,
      default:[]
    }
   },
  data(){
     return{
       buttonObj:{},
       temp:[]
     }
   },
   created(){
   },
   mounted(){
   },
   computed: {
   },
   methods: {
     selectItem(e,item,index){
       toggleClass(e.target,'active')
      this.addSelectData(e,item,index)
     },
     addSelectData(e,item,index){
       if(hasClass(e.target,'active')){
         this.temp.push(item)
       }else if(this.temp[index]){
         this.temp.splice(index,1)
       }
       console.log(this.temp)
     },
     confirmHander(){
       const items =this.$refs.item
       for(let i=0;i<items.lenght;i++){
         if(hasClass(items[i]) ){

         }
       }

     }
   }
  }
</script>
<style scoped lang="scss" rel="stylesheet/scss">
  @import '../../styles/variables';
  @import '../../styles/mixin';
  .box{
    display: flex;
    align-items: center;
    align-content: center;
    flex-wrap:wrap;
    color: $text2;
  }
  .item-4{
    flex: 0 0 22%;
    text-align: center;
    font-size: $font-size-small;
    background: $bg-grey;
    padding:10px 0;
    margin:10px 10px 0 0;
  }
  .item-3{
    flex: 0 0 30%;
    text-align: center;
    font-size: $font-size-small;
    background: $bg-grey;
    padding:10px 0;
    margin:10px 10px 0 0;
  }
  .active{
    background:$bg-sucess ;
    color: $success-color;
  }
  .confirm-bottone-wrapper{
    margin-top: 15px;
    padding-top: 10px;
    border-top: 1px solid $line;
    .b-box{@extend .box}
    .b-item{
      flex: 1;
      background: $bg-grey;
      text-align: center;
      padding:10px 0;
      font-size: $font-size-medium-x;
      margin-right: 10px;
    }
    .b-comfirm{
      color:$color-white;
      background: $success-color;
    }
  }
</style>
