<template>
 <div class="zone-wrapper">
   <div class="box">
     <div class="item left">
       <div class="scroll-wrapper">
         <ul
           v-infinite-scroll="loadMore"
           infinite-scroll-disabled="loading"
           infinite-scroll-distance="2">
           <li  @click.stop="selectZoneLeftItem(item,index)" v-for="(item,index) in zonelist" :class="{active:leftIndex===index}">{{ item }}</li>
         </ul>
       </div>
     </div>
     <div class="item middle" >
       <div class="scroll-wrapper">
         <ul
           v-infinite-scroll="loadMore"
           infinite-scroll-disabled="loading"
           infinite-scroll-distance="10">
           <li @click.stop="selectZoneMiddleItem(item,index)" v-for="(item,index) in listmiddle" :class="{active:middelIndex===index}">{{ item.data }}</li>
         </ul>
       </div>
     </div>
     <div class="item right" v-show="showrightwrapper">
       <div class="scroll-wrapper">
         <ul
           v-infinite-scroll="loadMore"
           infinite-scroll-disabled="loading"
           infinite-scroll-distance="10">
           <li  @click.stop="selectZoneRightItem(item,index)" v-for="(item,index) in zonerightlist" :class="{active:rightIndex===index}">{{ item.data }}</li>
         </ul>
       </div>
     </div>
   </div>

 </div>
</template>

<script type="text/ecmascript-6">
  import MaskCom from '@/components/Mask'
  import { mapMutations } from 'vuex'
  export default {
  name:'',
  components:{
    MaskCom
   },
  props:{
    zonelist:{
    type:Array,
    default:''
    },
    listmiddle:{
      type:Array,
      default:''
    },
    zonerightlist:{
      type:Array,
      default:''
    }
  },
  data(){
     return{
       rightIndex:0,
       middelIndex:0,
       leftIndex:0,
       list:[1,2,3,4],
       loading: false,
       allLoaded: false,
       showinmask:true,
       showrightwrapper:false
     }
   },
   created(){
   },
   mounted(){
   },
   computed: {
     showMaskFromP(){
       return this.$store.getters.showmask
     }
   },
   methods: {
     loadMore() {
     },
     selectZoneLeftItem(item,index){
       this.leftIndex = index
       this.$emit("selectZoneLeftItem",item)
       this.showrightwrapper = false
     },
     selectZoneMiddleItem(item,index){
       this.middelIndex = index
       this.$emit("selectZoneMiddleItem",item.data)
     },
     selectZoneRightItem(item,index){
       this.rightIndex = index
       this.$emit("selectZoneRightItem",item.data)
       this.changeShowMask(false)
     },
     ...mapMutations({
       changeShowMask: 'SHOWMASK'
     })
   },
    watch:{
      zonerightlist(v){
        if(v.length){
          this.showrightwrapper = true
        }
      }
    }
  }
</script>
<style scoped lang="scss" rel="stylesheet/scss">
  @import '../../../styles/variables';
  @import '../../../styles/mixin.scss';
  .box{
    position: relative;
    z-index: 9;
    background: #fff;
    display: flex;
    font-size: $font-size-medium-x;
    color: $black;
  }
  .item{
   flex: 1;
    .scroll-wrapper{
      padding-top: 10px;
      ul{
        max-height: 5rem;
        overflow: scroll;
      }
    }
    li{
      overflow:hidden;
      text-overflow:ellipsis;
      -o-text-overflow:ellipsis;
      white-space:nowrap;
      max-width: 4rem;
      border-bottom: 1px solid $line;
      padding-left: 15px;
      height: 40px;
      line-height: 40px;
      &.active{
        color:$blue;
      }
    }
  }
  .middle,.right{
    background: $bg-dark;
  }
</style>
