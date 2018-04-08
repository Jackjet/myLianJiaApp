<template>
 <div class="search-wrapper">
   <div class="search-location" v-if="showLocation">
     <div>
       <router-link tag="div" class="location" to="/cityindex">
       <div class="item">{{location}}</div>
       <div class="item-icon"><icon name="caret-down"></icon></div>
       </router-link>
     </div>
   </div>
   <div class="search-location" v-if="showHouseType">
     <div class="location" @click="showHouseListType">
       <div class="item">{{houseType}}</div>
       <div class="item-icon"><icon name="caret-down"></icon></div>
     </div>
     <mt-popup  position="left" :modal=false v-model="popupVisible1" popup-transition="popup-fade" class="mint-popup-1" :style="{ top: buttonBottom + 40 + 'px' }">
       <div >
         <span :key="item" class="border-1px" :class="{active:houseTypeIndex===index}" @click="selectItemType(item,index)" v-for="(item,index) in houseTypes">
           {{item}}
         </span>
       </div>
     </mt-popup>
   </div>
   <router-link tag="div" class="search-item"  to="/searchlist" v-if="showLocation">
       <div  ref="searchcom">
         <mt-search @input=listnerInput  v-model="value" :result.sync="result" placeholder="你想住在哪?(北上广深)" >
           <mt-cell @click.native="selectResultItem(item)"
             v-for="item in result"
             :title="item.discription"
             :value="item.num"
             is-link
             :key="item.id"
           >
           </mt-cell>
         </mt-search>
       </div>
   </router-link>
   <div class="search-item" v-if="showHouseType">
     <div ref="searchcom">
       <mt-search @input=listnerInput  v-model="value" :result.sync="result" placeholder="你想住在哪?(北上广深)" >
         <mt-cell @click.native="selectResultItem(item)"
                  v-for="item in result"
                  :title="item.discription"
                  :value="item.num"
                  is-link
                  :key="item.id"
         >
         </mt-cell>
       </mt-search>
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
      oneresult:{
        type:String,
        default:''
      },
      showLocation:{
        type:Boolean,
        defanult:false
      },
      showHouseType:{
        type:Boolean,
        defanult:false
      },
      result:{
        type:Array,
        deafault:[]
      },
      houseTypes:{
        type:Array,
        deafault:[]
      },
      location:{
        type:String,
        default:'广州'
      },
      listenerScroll:{
        type:Boolean,
        deafault:true
      }
    },
    data() {
      return {
        popupVisible1: false,
        searchValue:'',
        value:this.oneresult,
        cancelFlage:'',
        buttonBottom: 0,
        houseTypeIndex:0,
        houseType:'二手房'
      };
    },
   created(){
   },
    methods:{
      listnerInput(val){
        this.searchValue = val
        this.$emit('input', val);
      },
      showHouseListType(){
        this.popupVisible1 = !this.popupVisible1
      },
      selectItemType(item,index){
        this.houseTypeIndex = index
        this.houseType = item
        this.popupVisible1 = false,
        // 当选择房源类型时候，向外提示房源关键词
        this.$emit("keySearchWord2",item)
      },
      selectResultItem(item){
        this.$emit("selectResultItem",item.city)
      }
    },
   mounted(){
    this.listWrapper = this.$refs.searchcom.getElementsByClassName("mint-search")[0]
    this.listWrapper.style.height = 100 +'%';
    const cancelDom = this.$refs.searchcom.getElementsByClassName("mint-searchbar-cancel")[0]
     cancelDom.onclick=()=>{
       this.$emit("cancelSearch")
     }
     // 默认向外提示房源关键词
     this.$emit("keySearchWord2",this.houseType)
   },
    watch:{
     // 解决原框架组件搜索列表默认就占据整屏高度的问题
      result(newR){
        if(newR.length){
          this.listWrapper.style.height = 100 +'%';
          this.listWrapper.style.height = 100 +'vh';
        }else{
          this.listWrapper.style.height = 100 +'%';
        }
      },
      searchValue(newV){
        // 解决当删除搜索关键词时候，需要把列表高度置为正确
        if(newV === ''|| newV===undefined){
          this.listWrapper.style.height = 100 +'%';
        }
      }
    }
  }
</script>
<style scoped lang="scss" rel="stylesheet/scss">
  @import '../../styles/variables';
.search-wrapper{
  display: flex;
}
  .mint-popup-1 {
    //position: absolute;
    width: 1.5rem;
    left:45px;
    border-radius: 4px;
    border:1px solid $text;
    font-size: 0;
    transform: translate(-50%, 0);
    span {
      display: block;
      height: 35px;
      line-height: 35px;
      font-size: 14px;
      border-bottom:1px solid $line;
      &.active{
        color: $blue;
      }
    }
  }
  .mint-popup-1::before {
    content: '';
    position: absolute;
    top: -10px;
    right: 28px;
    width: 0;
    height: 0;
    border-right: 10px solid transparent;
    border-bottom: 10px solid $text;
    border-left: 10px solid transparent;
  }
  .search-location{
    position: relative;
    z-index: 2;
    padding:0 10px;
    height: 44px;
    line-height: 44px;
    text-align: center;
    vertical-align: middle;
    font-size: 14px;
    flex: 0 0 1.8rem;
    width: 1.8rem;
    color:$black;
    background-color: $bg-grey;
    .location{
      display: flex;
      align-items: center;
    }
    .item-icon{
      margin-left: 5px;
      font-size: 12px;
      color: $text;
    }
  }
  .search-item{
    flex:0 0 1;
    width: 100%;
  }
</style>
