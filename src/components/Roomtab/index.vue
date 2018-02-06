<template>
 <div class="room-tab">
   <mask-com :TOP="100" v-if="showMaskFromP" :ZINDEX="2"></mask-com>
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
   <mt-tab-container v-model="selected" ref="tabContainer">
     <mt-tab-container-item id="1">
      <zone @selectZoneRightItem="selectZoneRightItem" :listmiddle="zoneListMiddle" :zonelist=zonelist :zonerightlist=zoneListRight @selectZoneLeftItem="selectZoneLeftItem" @selectZoneMiddleItem="selectZoneMiddleItem"></zone>
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
  import { Toast } from 'mint-ui';
  import { More, Price, Roomtype,Zone} from '@/components/Querypannel'
  import MaskCom from '@/components/Mask'

  import {zoneSearch,ditieSearch,detailZoneSearch} from '@/api/remoteSearch'
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
       selectMode:'',
       zonetag:false,
       zonelist:['区域','地铁'],
       zoneListMiddle:[],
       zoneListRight:[],
       queryList:{
         city:'',
         line:'',
         detailzone:'',
       }
     }
   },
   created(){
     this.searchZone()
     // 从路由挂载查询条件参数.
     this.queryList.city=this.$route.query.queryItem
   },
   mounted(){
   },
   computed: {
     showMaskFromP(){
       return this.$store.getters.showmask
     },
     showTabFromState(){
       return this.$store.getters.showtabcontainer
     }
   },
   methods: {
     ...mapMutations({
       changeShowMask: 'SHOWMASK',
       changeShowTab: 'SHOWTAB',
     }),
     zoneHander(){
/*       this.selected = this.getSelectFlag(1)*/
       this.changeShowMask(!this.showMaskFromP)
       this.changeShowTab(!this.showTabFromState)

     },
     selectZoneLeftItem(item){
       if(item==='地铁'){
         this.searchDitie()
       }else if(item==='区域'){
         this.searchZone()
       }
     },
     selectZoneMiddleItem(item){
       if(item.indexOf('号线')>-1){
         //i (忽略大小写)
         //g (全文查找出现的所有匹配字符)
         const lineNum= item.replace(/[^0-9]/ig,"");
         this.queryList.line = lineNum
       }else{
         this.queryList.detailzone = item
       }
       this.searchDetailZone()
     },
     selectZoneRightItem(item){
       if(item!=='-'){
         // 最终选择的条件
         this.queryList.detailzone = item
         this.zoneT = item
         this.selected = ''
       }else{
         Toast('请选择有效的信息！');
       }
     },
     searchZone(){
       zoneSearch(this.queryList).then((res)=>{
         this.zoneListMiddle = res.data.items
       })
     },
     searchDitie(){
       ditieSearch(this.queryList).then((res)=>{
         this.zoneListMiddle = res.data.items
       })
     },
     searchDetailZone(){
       detailZoneSearch(this.queryList).then((res)=>{
         this.zoneListRight= res.data.items
       })
     }
   },
    watch:{
      zoneT(v){
        if(v!=='区域'){
          this.$emit("selectZoneT",this.queryList)
        }
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
