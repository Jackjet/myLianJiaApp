<template>
  <div class="room-wrapper">
    <div class="bottons-wrapper">
      <selctbottone :data-list="dataList" ></selctbottone>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Selctbottone from '@/components/Selectbutton'
  export default {
    name:'',
    components:{
      Selctbottone
    },
    data(){
      return{
        queryList:[],
        priceObj:{},
        dataList:[
         {'itemDeitail':['一室','二室','三室','四室','五室','六室'],
           'title':'房型选择',
           'queryType':'roomType'
         }
        ]

      }
    },
    created(){

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
.room-wrapper{
  z-index: 30;
}

</style>
