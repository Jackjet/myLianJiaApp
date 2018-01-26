<template>
 <div class="navabar-wrapper">
   <myheader>
     <router-link to="/" slot="left">
       <mt-button icon="back"></mt-button>
     </router-link>
     <div class="search" slot="center">
       <search></search>
     </div>
   </myheader>
 </div>
</template>

<script type="text/ecmascript-6">
  import search from '@/components/search'
  import myheader from '@/components/Myheader'
  export default {
  name:'',
  components:{
    myheader,
    search
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
  .navabar-wrapper{
    .mint-header{
      background:$bg-grey;
      color:$text2;
    }
  }

</style>
