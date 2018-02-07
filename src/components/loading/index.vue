<template>
 <div class="loading-wrapper" v-show="showloading">
   <img src="../../assets/img/loading.gif" class="loading-img">
   <div class="loading-text">加载中...</div>
 </div>
</template>

<script type="text/ecmascript-6">
  export default {
  name:'',
  components:{
   },
    props:{
      showloading:{
        type:Boolean,
        default:false
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
  .loading-img{
    text-align: center;
    font-size: $font-size-medium;
    color: $text2;
    width: 64px;
    height: auto;
  }
</style>
