<template>
 <div class="price-wrapper">
    <div class="bottons-wrapper">
     <selctbottone :data-list="dataList" :show-price-com="true"></selctbottone>
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
         {'itemDeitail':['100万以下','200万以下','300万以下','400万以下','500万以下','1600万以下'],
           /*类型为price时，输入价格范围，在点选价格标签，会提示报错*/
           'queryType':'priceType'
         }/*,
         {'itemDeitail':['一室','二室','三室','四室','五室','六室'],
           'title':'房型选择',
           'queryType':'roomType'
         },
         {'itemDeitail':['朝东','朝南','朝北','朝西','南北'],
           'title':'朝向',
           'queryType':'chaoXiang'
         }*/
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
.price-wrapper{
  z-index: 30;
}

</style>
