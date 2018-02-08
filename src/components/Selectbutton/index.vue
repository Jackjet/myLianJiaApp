<template>
 <div class="select-botton-wrapper">
   <div class="querylist-wrapper" v-for="(itemWrapper,indexWrapper) in dataList">
     <div class="query-title border-1px" v-if="itemWrapper.title">
       <header>{{itemWrapper.title}}</header>
     </div>
     <div class="box">
       <div ref="item"  :class="{'item-4':col===4, 'item-3':col===3}"
           v-for="(innerItem,index) in itemWrapper.itemDeitail"
            @click.stop="selectItem($event,innerItem,itemWrapper.queryType)" >
         {{innerItem}}
       </div>
     </div>
   </div>
   <div class="confirm-bottone-wrapper border-1px">
     <div class="b-box">
       <div class="b-item" v-if="simpleQuery"  @click.stop="noQuery">不限条件</div>
       <div class="b-item" v-if="moreQuery" @click.stop="clearQuery">清空条件</div>
       <div class="b-item b-comfirm" @click.stop="confirmHander">确定</div>
     </div>
   </div>
 </div>
</template>

<script type="text/ecmascript-6">
  import {hasClass,toggleClass,removeClass} from '@/utils/dom'
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
    },
     moreQuery:{
      type:Boolean,
      default:false
     },
     simpleQuery:{
       type:Boolean,
       default:true
     }
   },
  data(){
     return{
       buttonObj:{},
       temp:[
    /*     {'price':['10万一下','20万一下']},
           {'roomType':['一室','三室']}*/
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
     //是否已经存储过查询类型
     // 实现思路，先确定返回的temp的数据结构（模拟）
     //遍历里面的数据结构（键名）
     checkIsSaveType(queryType){
       let flag = false
       this.temp.forEach((obj)=>{
         for(let key in obj){
          if(key.indexOf(queryType) < 0){
            return
          }else{
            flag = true
          }
         }
       })
       return flag
     },
     //根据类型，找到存储obj所在的索引
     findIndexByQueryTypeInTemp(queryType){
     const findIndex =  this.temp.findIndex((obj)=>{
         for(let key in obj){
           if(key.indexOf(queryType) > -1 ){
             return true
           }
         }
       })
      return  findIndex
     },
     selectItem(e,item,queryType){
       toggleClass(e.target,'active')
       this.addSelectData(e,item,queryType)
       this.deletData(e,item,queryType)
       console.log(this.temp)
     },
     addSelectData(e,item,queryType){
       if(hasClass(e.target,'active')){
         if(!this.checkIsSaveType(queryType)){
           let obj = new Object();
           let tem = []
           tem.push(item)
           obj[queryType] = tem
           this.temp.push(obj)
         }else{
           // 找到所在obj
           const inserIndex = this.findIndexByQueryTypeInTemp(queryType)
           this.temp[inserIndex][queryType].push(item)
         }
       }
     },
     deletData(e,item,queryType){
       if( !hasClass(e.target,'active') && this.checkIsSaveType(queryType)){
         const inserIndex = this.findIndexByQueryTypeInTemp(queryType)
         const deletIndex = this.temp[inserIndex][queryType].findIndex(innerItem=>{
           return item === innerItem
         })
         this.temp[inserIndex][queryType].splice(deletIndex,1)
       }
     },
     confirmHander(){
       this.$emit("selectQuery",{q:this.temp})
     },
     clearQuery(){
       const items =this.$refs.item
       for(let i=0;i<items.length;i++){
         if(hasClass(items[i],'active') ){
           removeClass(items[i],'active')
           this.temp = []
         }
       }
     },
     noQuery(){
       this.$emit("selectQuery",{q:'no'})
     }
   }
  }
</script>
<style scoped lang="scss" rel="stylesheet/scss">
  @import '../../styles/variables';
  @import '../../styles/mixin';
  .query-title{
    padding:10px 0;
    font-size: $font-size-medium-x;
    border-bottom: 1px solid $line;
  }
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
