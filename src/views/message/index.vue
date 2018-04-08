<template>
 <div class="message-warrper">
   <topheader :fixed=false :showUtils="false" :title="title"></topheader>
   <div class="content">
     <div class="flex-box">
       <div class="flex-item avatar">
         <icon name="github-alt"></icon>
       </div>
       <div class="flex-item">
         <div class="title">链家帮帮</div>
         <div class="text">欢迎使用链家帮帮</div>
       </div>
     </div>
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
       title:'消息'
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
  @import '../../styles/utils.scss';
  .avatar{
    font-size: 36px;
    color:$success-color;
    flex: 0 0 50px;
    width: 50px;
  }
  .flex-box{
    justify-content: center;
    align-items:center;
    font-size: $font-size-medium;
    padding:15px 10px 15px 10px;
    border-bottom: 1px solid $line;
  }
  .title{
    font-size: $font-size-medium-x;
  }
  .text{
    margin-top: 5px;
    color:$text;
    font-size: $font-size-medium;
  }
</style>
