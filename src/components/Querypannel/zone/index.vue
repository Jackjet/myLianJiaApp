<template>
 <div class="zone-wrapper">
   <div class="box">
     <div class="item left">
       <div class="scroll-wrapper">
         <ul
           v-infinite-scroll="loadMore"
           infinite-scroll-disabled="loading"
           infinite-scroll-distance="2">
           <li  @click.stop="selectZoneLeftItem(item,index)" v-for="(item,index) in zoneList" :class="{active:leftIndex===index}">{{ item }}</li>
         </ul>
       </div>
     </div>
     <div class="item middle">
       <div class="scroll-wrapper">
         <ul
           v-infinite-scroll="loadMore"
           infinite-scroll-disabled="loading"
           infinite-scroll-distance="2">
           <li @click.stop="selectZoneMiddleItem(item,index)" v-for="(item,index) in list" :class="{active:middelIndex===index}">{{ item }}</li>
         </ul>
       </div>
     </div>
     <div class="item right">
       <div class="scroll-wrapper">
         <ul
           v-infinite-scroll="loadMore"
           infinite-scroll-disabled="loading"
           infinite-scroll-distance="2">
           <li  @click.stop="selectZoneRightItem(item,index)" v-for="(item,index) in list" :class="{active:rightIndex===index}">{{ item }}</li>
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

  data(){
     return{
       rightIndex:0,
       middelIndex:0,
       leftIndex:0,
       zoneList:['地区','地铁'],
       list:[1,2,3,4],
       loading: false,
       allLoaded: false,
       showinmask:true
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
       this.loading = true;
       setTimeout(() => {
         let last = this.list[this.list.length - 1];
         for (let i = 1; i <= 10; i++) {
           this.list.push(last + i);
         }
         this.loading = false;
       }, 10000);
     },
     selectZoneLeftItem(item,index){
       this.leftIndex = index
       this.$emit("selectZoneLeftItem",item)
     },
     selectZoneMiddleItem(item,index){
       this.middelIndex = index
       this.$emit("selectZoneMiddleItem",item)
     },
     selectZoneRightItem(item,index){
       this.rightIndex = index
       this.$emit("selectZoneRightItem",item)
       this.changeShowMask(false)
     },
     ...mapMutations({
       changeShowMask: 'SHOWMASK'
     })
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
