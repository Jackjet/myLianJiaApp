<template>
 <div class="room-tab">
   <mask-com :TOP="100" v-if="showMaskFromP" :ZINDEX="2"></mask-com>
   <mt-navbar v-model="selected">
     <mt-tab-item id="1"  @click.native="selectItemHander">
       <span class="text" :class="{active:zoneSelect}">{{zoneT}}</span>
       <span class="text">
         <icon name="caret-down"></icon>
       </span>
     </mt-tab-item>
     <mt-tab-item id="2" @click.native="selectItemHander">
       <span class="text" :class="{'active':priceSelect}">{{priceT}}</span>
       <span class="text" >
         <icon name="caret-down"></icon>
       </span>
     </mt-tab-item>
     <mt-tab-item id="3" @click.native="selectItemHander">
       <span class="text" :class="{active:roomSelect}">{{roomTypeT}}</span>
       <span class="text">
         <icon name="caret-down"></icon>
       </span>

     </mt-tab-item>
     <mt-tab-item id="4" @click.native="selectItemHander">
       <span class="text" :class="{active:moreSelect}">更多</span>
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
       zoneSelect:false,
       priceSelect:false,
       roomSelect:false,
       moreSelect:false,
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
       lastSelectQueryItem:''
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
     // 蒙版展示条件
     showMaskFromP(){
       return this.$store.getters.selectItem
     },
     // 具体选择的条件item
     getQueryComfirmTag(){
       return this.$store.getters.comfirmTag
     },
     //查询条件
     getTabQueryItem(){
       return this.$store.getters.roomTabQueryItem
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
     // 选中的tab存入state中
     saveSelectItemId(id){
       this.selectItem(id)
     },
     //查询面板条件反馈
     loadQueryOnTab(obj){
       const value = Object.values(obj)[0]
       const itemKey = Object.keys(obj)[0]
       const last = value.length - 1
       const itemLenght = value.length
       switch (itemKey){
         case 'priceType':
           if(itemLenght > 1){
             this.priceT = '多选'
             break;
           }
           if(itemLenght===0){
             this.priceT = '价格'
             break;
           }
           this.priceT = value[last]
            break;
         case 'roomType':
           if(itemLenght > 1){
             this.roomTypeT = '多选'
             break;
           }
           if(itemLenght===0){
             this.roomTypeT = '房型'
             break;
           }
           this.roomTypeT =  value[last]
           break;
         case 'priceRange':
           if(value.upPrice && !value.downPrice){
             this.priceT = value.upPrice + '万以上'
           }
           if(!value.upPrice && value.downPrice){
             this.priceT = value.downPrice + '万以下'
           }
           if(value.upPrice && value.downPrice){
             this.priceT = value.upPrice + '-' + value.downPrice + '万'
           }
           break;
       }
/*       for(let key in obj){
         if(key.indexOf('priceType') > -1 ){
           this.priceT = obj.priceType
         }
       }*/
     }
   },
    watch:{
   /*   zoneSelect:false,
      priceSelect:false,
      roomSelect:false,
      moreSelect:false,
      priceT:'价格',
      roomTypeT:'房型',*/
      zoneT(v){
        if(v!=='区域'){
          this.zoneSelect = true
          this.$emit("selectZoneT",this.queryList)
        }
      },
      priceT(v){
        if(!(v==='价格')){
          this.priceSelect = true
        }else{
          this.priceSelect = false
        }
      },
      roomTypeT(v){
        if(!(v==='房型')){
          this.roomSelect = true
        }else{
          this.roomSelect = false
        }
      },
      // 监听state的变化，当为空，关闭选项
      showMaskFromP(v){
        if(!v){
          this.selected = ''
        }
      },
      // 当点击查询面板里面的确定按钮之后执行事件
      getQueryComfirmTag(){
        //console.log( this.$store.getters.roomTabQueryItem)
        const lastIndex = this.$store.getters.roomTabQueryItem.length-1
        this.lastSelectQueryItem = this.$store.getters.roomTabQueryItem[lastIndex]
        //条件为空不传
        if(this.lastSelectQueryItem){
          this.loadQueryOnTab(this.lastSelectQueryItem)
        }
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
  .mint-tab-item-label{
    .active{
      color:$blue;
    }
  }
  .mint-navbar .mint-tab-item{
    .text{
      display: inline-block;
      max-width: 55px;
      overflow: hidden;
      text-overflow:ellipsis;
      white-space: nowrap;
    }
  }
  .mint-navbar .mint-tab-item.is-selected {
    .text{
      color:$blue;
    }
  }
</style>
