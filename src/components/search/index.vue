<template>
 <div class="search-wrapper">
   <div class="search-location" v-if="showLocation">
     <div class="location" >
       <div class="item">{{location}}</div>
       <div class="item-icon"><icon name="caret-down"></icon></div>
     </div>
   </div>
   <div class="search-item" ref="searchcom">
     <mt-search @input=listnerInput  v-model="value" :result.sync="result" placeholder="你想住在哪?(北上广深)" >
       <mt-cell
         v-for="item in result"
         :title="item.discription"
         :value="item.num"
         to="/querylist"
         is-link
         :key="item.id"
       >
       </mt-cell>
     </mt-search>
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
        defanult:true
      },
      result:{
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
        searchValue:'',
        value:this.oneresult,
        cancelFlage:''
      };
    },
   created(){
   },
    methods:{
      listnerInput(val){
        this.searchValue = val
        this.$emit('input', val);
      }
    },
   mounted(){
    this.listWrapper = this.$refs.searchcom.getElementsByClassName("mint-search")[0]
    this.listWrapper.style.height = 100 +'%';
    const cancelDom = this.$refs.searchcom.getElementsByClassName("mint-searchbar-cancel")[0]
     cancelDom.onclick=()=>{
       this.$emit("cancelSearch")
     }
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
  .search-location{
    z-index: 1;
    padding:0 10px;
    height: 44px;
    line-height: 44px;
    text-align: center;
    vertical-align: middle;
    font-size: 14px;
    flex: 0 0 1.3rem;
    width: 1.3rem;
    color:$black;
    background-color: $bg-grey;
    .location{
      display: flex;
      justify-content: space-between;
    }
    .item-icon{
      font-size: 12px;
      color: $text;
    }
  }
  .search-item{
    flex: 1;
  }
</style>
