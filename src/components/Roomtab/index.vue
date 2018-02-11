<template>
 <div class="room-tab">
   <mask-com :TOP="100" v-if="showMaskFromP" :ZINDEX="2"></mask-com>
   <mt-navbar v-model="selected">
     <mt-tab-item id="1"  @click.native="selectItemHander">
       <span class="text">{{zoneT}}</span>
       <span class="text">
         <icon name="caret-down"></icon>
       </span>
     </mt-tab-item>
     <mt-tab-item id="2" @click.native="selectItemHander">
       <span class="text">{{priceT}}</span>
       <span class="text">
         <icon name="caret-down"></icon>
       </span>
     </mt-tab-item>
     <mt-tab-item id="3" @click.native="selectItemHander">
       <span class="text">{{roomTypeT}}</span>
       <span class="text">
         <icon name="caret-down"></icon>
       </span>

     </mt-tab-item>
     <mt-tab-item id="4" @click.native="selectItemHander">
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
     <mt-tab-container-item id="2" class="price-wrapper">
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
       selected: '',//itemtab被选中的索引
       selectMode:'',
       zonetag:false,
       zonelist:['区域','地铁'],
       zoneListMiddle:[],
       zoneListRight:[],
       queryList:{
         city:'',
         line:'',
         detailzone:'',
       },
     }
   },
   created(){
     this.searchZone()
     // 从路由挂载查询条件参数.
     this.queryList.city=this.$route.query.queryItem
   },
   mounted(){
    this.saveIdsTabItemInState()
   },
   computed: {
     // 蒙版展示条件
     showMaskFromP(){
       return this.$store.getters.selectItem
     },
     // 具体选择的条件item
     getQueryComfirmTag(){
       return this.$store.getters.comfirmTag
     }
   },
   methods: {
     ...mapMutations({
       changeShowMask: 'SHOWMASK',
       changeShowTab: 'SHOWTAB',
       saveItemIds:'SAVEITEMIDS',
       selectItem:'SELECTITEMID'
     }),
     // 子项展开与否
     selectItemHander(){
       if(! (this.$store.getters.selectItem === this.selected)){
         this.saveSelectItemId(this.selected)
       }else{
         this.selected = ''
         this.saveSelectItemId(this.selected)
       }
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
         this.saveSelectItemId('')
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
     },
     //把item子项的id存入state中，统一管理打开关闭的状态
     saveIdsTabItemInState(){
       let itemIds = []
       const childCom =  this.$refs.tabContainer.$children
       childCom.forEach((item)=>{
         itemIds.push(item.id)
       })
       this.saveItemIds(itemIds)
     },
     // 选中的tab存入state中
     saveSelectItemId(id){
       this.selectItem(id)
     }
   },
    watch:{
      zoneT(v){
        if(v!=='区域'){
          this.$emit("selectZoneT",this.queryList)
        }
      },
      // 监听state的变化，当为空，关闭选项
      showMaskFromP(v){
        if(!v){
          this.selected = ''
        }
      },
      getQueryComfirmTag(){
        console.log( this.$store.getters.roomTabQueryItem)
      }
    }
  }
</script>
<style scoped lang="scss" rel="stylesheet/scss">
  @import '../../styles/variables';
  .price-wrapper{
  }
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
