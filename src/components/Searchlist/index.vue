<template>
 <div class="wrapper">
   <div class="search">
       <search  @input=listnerInput :result=searchtResult @cancelSearch="cancelSearch"></search>
   </div>
   <div class="history-list-wrapper" v-show="showhistorylist">
     <historylist :searches="searches"></historylist>
   </div>
 </div>
</template>

<script type="text/ecmascript-6">
  import search from '@/components/search'
  import Historylist from '@/components/Historylist'
  import {citySearch} from '@/api/remoteSearch'

  import {debounce} from '@/utils/index'
  import {saveSearch,loadSearch} from '@/utils/cache'
  export default {
  name:'',
  components:{
    Historylist,
    search
   },
  data(){
     return{
       searchtResult:[],
       searchValue:'',
       searches:[],
       showhistorylist:true
     }
   },
   created(){
   },
   mounted(){
     this.searches = loadSearch()
   },
   computed: {
   },
   methods: {
     listnerInput(val){
       this.searchValue = val
     },
     searchCitys(searchQuery){
       citySearch(searchQuery).then(res=>{
         this.searchtResult =  res.data.items
         if(this.searchtResult.length){
           // 有返回结果才存储
           this.$store.dispatch('saveSearchHistory',searchQuery)
         }
       })
     },
     cancelSearch(){
       this.$router.push('/')
     }
   },
    watch:{
      searchValue(newV){
        if(newV === ''|| newV===undefined){
          this.showhistorylist = true
        }else{
          debounce(this.searchCitys(newV),1000)
        }
      },
      searchtResult(newR){
        if(newR.length){
          this.showhistorylist = false
        }else {
          this.showhistorylist = true
        }
      }
    }
  }
</script>
<style scoped lang="scss" rel="stylesheet/scss">
  @import '../../styles/variables';
  @import '../../styles/mixin.scss';
  .wrapper{
    .search{
      @include border-1px($line);
    }
    .mint-search{
      height: 100%;
    }

    .back{
      display: inline-block;
    }
  }

</style>
