<template>
 <div class="querlist-wrapper">
   <div class="header">
     <Searchlist></Searchlist>
   </div>
   <div class="query-list">
   </div>
   <div class="result-list">
     <roomlist></roomlist>
   </div>
 </div>
</template>

<script type="text/ecmascript-6">
  import roomlist from '@/views/roomlist'
  import Searchlist from '@/components/Searchlist'
  export default {
  name:'',
  components:{
    Searchlist,
    roomlist
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
</style>

