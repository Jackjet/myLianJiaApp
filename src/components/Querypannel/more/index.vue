<template>
  <div class="price-wrapper">
    <div class="bottons-wrapper">
      <selctbottone @selectQuery="selectQuery" :data-list="dataList" :simple-query="false" :more-query="true" ></selctbottone>
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
      selectQuery(item){
        console.log(item)
      }
    },

  }
</script>
<style scoped lang="scss" rel="stylesheet/scss">


</style>
