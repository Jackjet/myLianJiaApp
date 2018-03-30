<template>
 <div class="header-wrapper">
   <mt-header fixed :title=title  v-bind:style="{ opacity: opacitys }" >
     <a class="go-back" @click="goBack" slot="left" >
       <mt-button icon="back"></mt-button>
     </a>
     <utils v-if="showUtils" slot="right" @duibi="duibi" @info="info" @share="share"></utils>
   </mt-header>
 </div>
</template>

<script type="text/ecmascript-6">
  import utils from '@/components/Topheader/utils'
  export default {
  name:'',
  components:{
    utils
   },
  data(){
     return{

     }
   },
    props:{
    showUtils:{
      type:Boolean,
      default:true
    },
     title:{
      type:String,
      default:''
     },
     opacitys:{
      type:Number,
      default:1
     }
   },
   created(){
   },
   mounted(){
   },
   computed: {
   },
   methods: {
     goBack(){
       this.$router.go(-1)
     },
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
  @import '../../styles/variables.scss';
  .header-wrapper{
    .mint-header{
      color:$text2;
      background-color: $bg-grey;
    }
  }
</style>
