<template>
 <div class="e-warapper">
   <topheader :showUtils="false" :title="title"></topheader>
   <div class="content">
     <a href="#" class="info">对比和信息二级页面</a>
   </div>
 </div>
</template>

<script type="text/ecmascript-6">
  import Topheader from '@/components/Topheader'
  export default {
  name:'',
  components:{
    Topheader
   },
  data(){
     return{
       title:'二级页面'
     }
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
  @import '../../styles/variables.scss';
  .e-warapper{
    width: 100%;
    background-color: $color-white;
    position: fixed;
    top: 0;
    bottom: 0;
    height: 100%;
    z-index: 2000;
  }
  .content{
    font-size: $font-size-medium;
    color: $text2;
    text-align: center;
    margin-top: 240px;
  }
  .info{
    color:$color-white;
    padding:10px 18px;
    background-color: $success-color;
    border-radius: 8px;
  }
</style>
