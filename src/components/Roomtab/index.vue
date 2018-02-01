<template>
 <div class="room-tab">
   <mask-com :TOP="100" v-if="showMaskFromP"></mask-com>
   <mt-navbar v-model="selected">
     <mt-tab-item id="1"  @click.native="zoneHander">
       <span class="text">{{zoneT}}</span>
       <span class="text">
         <icon name="caret-down"></icon>
       </span>
     </mt-tab-item>
     <mt-tab-item id="2">
       <span class="text">{{priceT}}</span>
       <span class="text">
         <icon name="caret-down"></icon>
       </span>
     </mt-tab-item>
     <mt-tab-item id="3">
       <span class="text">{{roomTypeT}}</span>
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
      <zone @selectZoneRightItem="selectZoneRightItem"></zone>
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
  import MaskCom from '@/components/Mask'
  import { mapMutations } from 'vuex'
  export default {
  name:'',
  components:{
    MaskCom,
    More,
    Price,
    Roomtype,
    Zone
   },
  data(){
     return{
       zoneT:'区域',
       priceT:'价格',
       roomTypeT:'房型',
       selected: '',
       selectMode:''
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
     ...mapMutations({
       changeShowMask: 'SHOWMASK'
     }),
     zoneHander(){
       this.changeShowMask(!this.showMaskFromP)
     },
     selectZoneRightItem(item){
       this.selected = ''
       this.zoneT = item
     }
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
