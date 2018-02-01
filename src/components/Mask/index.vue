<template>
 <div class="mask-warpper" :style="{ top: TOP + 'px',zIndex:ZINDEX }">
 </div>
</template>

<script type="text/ecmascript-6">
  export default {
  name:'',
  components:{
   },
    props:{
      TOP:{
        type:Number,
        default:0
      },
      ZINDEX:{
      type:Number,
        default:0
      },
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
  .mask-warpper{
    position: fixed;
    top:0;
    bottom: 0;
    width: 100%;
    height: 100%;
    opacity: .5;
    background: #000;
  }
</style>
