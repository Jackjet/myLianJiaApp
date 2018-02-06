<template>
 <div class="querlist-wrapper">
   <myheader>
       <router-link to="/searchlist" slot="left">
         <mt-button icon="back"></mt-button>
       </router-link>

       <div class="search" slot="center">
         <router-link to="/searchlist" slot="left">
           <div class="mint-searchbar-inner">
             <i class="mintui mintui-search"></i>
             <input
               ref="input"
               type="search"
               :placeholder='placeholder'
               class="mint-searchbar-core">
           </div>
         </router-link>
       </div>
       <div class="header-right" slot="right">
         <icon name="map-marker" class="location-arrow"></icon>
         <icon name="commenting"></icon>
       </div>
   </myheader>
   <div class="query-list border-1px">
     <roomtab @selectZoneT="selectZoneT"></roomtab>
   </div>
   <div class="result-list">
     <mt-loadmore
       :top-pull-text="pulldownText"
       :top-method="loadTop"
       :top-distance="40"
       :bottom-method="loadBottom"
       :bottom-all-loaded="allLoaded"
       ref="loadmore">
       <roomlist :dataList="roomlist"
                 :showheader=false
       ></roomlist>
       <loading slot="bottom" :showloading="showloading" class="page-infinite-loading"></loading>
     </mt-loadmore>
   </div>
 </div>
</template>

<script type="text/ecmascript-6">
  import roomlist from '@/views/roomlist'
  import search from '@/components/search'
  import Searchlist from '@/components/Searchlist'
  import Roomtab from '@/components/Roomtab'
  import Myheader from '@/components/Myheader'
  import loading from '@/components/loading'
  import {roomByQuery} from '@/api/room'

  import {Toast} from "Mint-ui"
  export default {
  name:'',
  components:{
    loading,
    Myheader,
    search,
    Searchlist,
    roomlist,
    Roomtab,

   },
    props:{
      placeholder: {
        default: '请输入小区或商圈名称'
      }
    },
  data(){
     return{
       showloading:false,
       allLoaded:false,
       bottomStatus: '',
       roomlist:[],
       queryList:{},
       pulldownText:'刷新'
     }
   },
   created(){
     this.searchRoomByQuery(this.queryList);
   },
   mounted(){
    const textDom =  this.$refs.loadmore.$el.getElementsByClassName("mint-loadmore-text")[0]
    textDom.style.cssText ='color:#898a8c;font-size:14px';
   },
   computed: {
   },
   methods: {
     selectZoneT(q){
       this.queryList = q
     },
     searchRoomByQuery(q){
       return new Promise((resolve,reject)=>{
         roomByQuery(q).then(res=>{
           this.roomlist = res.data.items
         })
         resolve();
       })

     },
     loadTop(){
       this.searchRoomByQuery(this.queryList).then(()=>{
         // 当刷新完后需手动调用加载完事件
         this.$refs.loadmore.onTopLoaded();
       })
     },
     loadBottom(){
       this.showloading = true
       this.queryList.morenum=6
       roomByQuery(this.queryList).then((res)=>{
         if(res.data.hasMore){
           this.roomlist =  this.roomlist.concat(res.data.items)
           this.showloading = false
         }else{
           Toast('没有更多了');
           this.allLoaded = true
           this.showloading = false
           this.$refs.loadmore.onBottomLoaded();
         }

       })
     }
   },
    watch:{
      queryList(v){
        this.searchRoomByQuery(this.queryList)
      }
    }
  }
</script>
<style scoped lang="scss" rel="stylesheet/scss">
  @import '../../styles/variables';
  .mint-header{
    background:$bg-grey ;
    color:$text;
  }
  .mint-searchbar-inner{
    color:$black;
    background: $bg-dark;
    .mint-searchbar-core{
      background: $bg-dark;
    }
  }
  .header-right{
    color:$text2;
  }
  .location-arrow{
    margin-right: 10px;
  }
  .result-list{
    padding:10px 10px 0 10px;
  }
  .query-list{
    border-bottom: 1px solid $line;
  }
  .loadmore-tex{
    color: #898a8c;
    font-size: 14px;
  }
  .result-list .room-warpper{
    margin-bottom: 0;
  }
  .page-infinite-loading{
    text-align: center;
    font-size: $font-size-medium;
    color: $text2;
  }
  .fading-circle{
    text-align: center;
    }

</style>

