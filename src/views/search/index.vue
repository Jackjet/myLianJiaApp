<template>
 <div class="search-wrapper">
   <div class="search-location">
     <div class="location">
       <div class="item">{{location}}</div>
       <div class="item-icon"><icon name="caret-down"></icon></div>
     </div>
   </div>
   <div class="search-item">
     <mt-search @input=listnerInput  v-model="value" :result.sync="result" placeholder="你想住在哪?">
       <mt-cell
         v-for="item in result"
         :title="item"
         :value="item"
         :to="{item}"
       >
       </mt-cell>
     </mt-search>
   </div>
 </div>
</template>

<script type="text/ecmascript-6">
  export default {
  name:'',
  components:{
   },
    props:{
      oneresult:{
        type:String,
        default:''
      },
      result:{
        type:Array,
        deafault:[]
      },
      location:{
        type:String,
        default:'广州'
      },
      listenerScroll:{
        type:Boolean,
        deafault:true
      }
    },
    data() {
      return {
        value:this.oneresult
      };
    },
   created(){
   },
    methods:{
      listnerInput(val){
        this.$emit('input', val);
      }
    },
   mounted(){

   },

  }
</script>
<style scoped lang="scss" rel="stylesheet/scss">
  @import '../../styles/variables.scss';
.search-wrapper{
  display: flex;
}
  .search-location{
    padding:0 10px;
    height: 44px;
    line-height: 44px;
    text-align: center;
    vertical-align: middle;
    font-size: 14px;
    flex: 0 0 1.3rem;
    width: 1.3rem;
    color:$black;
    background-color: $bg-grey;
    .location{
      display: flex;
      justify-content: space-between;
    }
    .item-icon{
      font-size: 12px;
      color: $text;
    }
  }
  .search-item{
    flex: 1;
  }
</style>
