<template>
 <div class="utils-wrapper">
   <div class="flex-box">
     <div class="flex-item"><icon name="flag" @click.native="duibi"></icon></div>
     <div class="flex-item"><icon name="info-circle" @click.native="info"></icon></div>
     <div class="flex-item"><icon name="share-alt-square" @click.native="share"></icon></div>
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
     duibi(){
       this.$emit("duibi")
     },
     info(){
       this.$emit("info")
     },
     share(){
       this.$emit("share")
     }
   }
  }
</script>
<style scoped lang="scss" rel="stylesheet/scss">
  @import '../../../styles/variables.scss';
  @import '../../../styles/mixin.scss';
  .flex-box{
    @include flex-box
  }
 .flex-item{
   @include flex-item
 }
</style>
