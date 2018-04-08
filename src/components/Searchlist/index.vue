<template>
 <div class="wrapper">
   <div class="search">
       <search @keySearchWord2="keySearchWord2"  @input=listnerInput :result=searchtResult @cancelSearch="cancelSearch"  :showHouseType=true :houseTypes=houseTypes @selectResultItem="selectResultItem" :location="location"></search>
   </div>
   <div class="history-list-wrapper" v-show="showhistorylist">
     <historylist :searches="searches" @deleteAll="deleteAll" @delete="deleteOne" @select="selectItem"></historylist>
   </div>
 </div>
</template>

<script type="text/ecmascript-6">
  import { MessageBox } from 'mint-ui';
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
    props:{
      location:{
        type:String,
        default:'广州'
      }
    },
  data(){
     return{
       searchtResult:[],
       searchValue:'',
       searches:[],
       showhistorylist:true,
       houseTypes:['二手房','新房','租房'],
       HOUSETYPE:'',
       listQuery:{
         city:'',
         houseType:''
       }
     }
   },
   created(){
   },
   mounted(){
     this.searches = this.$store.getters.searchlist
   },
   computed: {
   },
   methods: {
     listnerInput(val){
       this.searchValue = val
     },
     keySearchWord2(key){
        this.HOUSETYPE = key
     },
     searchCitys(searchQuery){
       this.listQuery.city = searchQuery
       this.listQuery.houseType = this.HOUSETYPE

       citySearch(this.listQuery).then(res=>{
         this.searchtResult =  res.data.items
         if(this.searchtResult.length){
           // 有返回结果才存储
           this.$store.dispatch('saveSearchHistory',searchQuery)
         }
       })
     },
     cancelSearch(){
       this.$router.push('/')
     },
     selectItem(item){
       this.$router.push({ path: 'querylist', query: { queryItem: item }})
     },
     deleteOne(item){
       MessageBox.confirm('确定删除此操作?').then((action) => {
         this.$store.dispatch('deleteSearchHistory',item)
       }).then(()=>{
         this.searches = this.$store.getters.searchlist
       });
     },
     deleteAll(){
       MessageBox.confirm('确定删除所有记录?').then(() => {
         this.$store.dispatch('clearSearchHistory')
       }).then(()=>{
         this.searches = this.$store.getters.searchlist
       });
     },
     selectResultItem(item){
       this.$router.push({ path: 'querylist', query: { queryItem: item }})
     }
   },
    watch:{
      searchValue(newV){
        if(newV === ''|| newV===undefined){
          this.showhistorylist = true
        }else{
          debounce(this.searchCitys(newV),500)
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
