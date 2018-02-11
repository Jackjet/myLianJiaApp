<template>
  <div class="more-wrapper">
    <div class="bottons-wrapper">
      <selctbottone :col="3" :data-list="dataList" :simple-query="false" :more-query="true" ></selctbottone>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Selctbottone from '@/components/Selectbutton'
  import {moreQuerySearch} from '@/api/remoteSearch'
  export default {
    name:'',
    components:{
      Selctbottone
    },
    data(){
      return{
        dataList:[]
      }
    },
    created(){
      moreQuerySearch().then((res)=>{
        this.dataList = res.data.items
      })
    },
    mounted(){

    },
    computed: {
    },
    methods: {
    },

  }
</script>
<style scoped lang="scss" rel="stylesheet/scss">
.more-wrapper{
  z-index: 30;
}

</style>
