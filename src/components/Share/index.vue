<template>
 <div class="share-wrapper">
   <div class="flex-box">
     <div class="flex-item">
       <div><icon name="weixin" class="weixin icon"></icon></div>
       <span class="share-text">微信</span>
     </div>
     <div class="flex-item">
       <div><icon name="weixin" class="weixin icon"></icon></div>
       <span class="share-text">朋友圈</span>
     </div>
     <div class="flex-item">
       <div class="weixin"><icon name="weixin" class="weixin icon"></icon></div>
       <span class="share-text">经纪人</span>
     </div>
     <div class="flex-item">
       <div class="weixin"><icon name="weixin" class="weixin icon"></icon></div>
       <span class="share-text">短信</span>
     </div>
   </div>
   <div class="cancle" @click.stop="cancle">
     取消
   </div>
 </div>
</template>

<script type="text/ecmascript-6">
  export default {
  name:'',
  components:{
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
     cancle(){
       this.$emit("cancle")
     }
   }
  }
</script>
<style scoped lang="scss" rel="stylesheet/scss">
  @import '../../styles/variables.scss';
  .share-wrapper {
    padding-top:.5rem;
    background-color: $color-white;
  }
  .share-text{
    font-size: $font-size-small;
    color:$text2;
  }
  .weixin{
    color:$success-color;
  }
  .flex-box{
   padding-bottom:.5rem;
   font-size: $font-size-large;
    display: flex;
  }
  .flex-item{
    text-align: center;
    flex: 1;
  }
  .icon{
    font-size: $font-size-large-l;
  }
  .cancle{
    padding:15px 0;
    border-top: solid 1px $line;
    font-size: $font-size-large;
    text-align: center;
  }
</style>
