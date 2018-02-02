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
   <div class="query-list">
     <roomtab></roomtab>
   </div>
   <div class="result-list">
     <roomlist></roomlist>
   </div>
 </div>
</template>

<script type="text/ecmascript-6">
  import roomlist from '@/views/roomlist'
  import search from '@/components/search'
  import Searchlist from '@/components/Searchlist'
  import Roomtab from '@/components/Roomtab'
  import Myheader from '@/components/Myheader'


  export default {
  name:'',
  components:{
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
     return{}
   },
   created(){

   },
   mounted(){
   },
   computed: {
   },
   methods: {
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
</style>

