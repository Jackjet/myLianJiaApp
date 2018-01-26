<template>
 <div class="querlist-wrapper">
   <div class="header">
     <Navbar></Navbar>
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
  import Navbar from '@/components/Navbar'
  export default {
  name:'',
  components:{
    Navbar,
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
