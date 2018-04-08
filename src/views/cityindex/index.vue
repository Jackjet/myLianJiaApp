<template>
  <div class="page-indexlist">
    <topheader :fixed=true :showUtils="false" :title="title"></topheader>
    <div class="page-indexlist-wrapper">
      <mt-index-list>
        <mt-index-section index="#">
          <mt-cell :title="locationing" @click.native="selectCity(locationing)"></mt-cell>
        </mt-index-section>
        <mt-index-section index="热">
          <mt-cell v-for="(hot,index) in hotcity" :title="hot" :key="index" @click.native="selectCity(hot)"></mt-cell>
        </mt-index-section>
        <mt-index-section v-for="(item,indexkey) in alphabet" :index="item.initial" :key="indexkey">
          <mt-cell v-for="(cell,index) in item.cells" :title="cell" :key="index" @click.native="selectCity(cell)"></mt-cell>
        </mt-index-section>
      </mt-index-list>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Topheader from '@/components/Topheader'
  import { mapMutations} from 'vuex'
  const NAMES = ['#','热','Aaron', 'Alden', 'Austin', 'Baldwin', 'Braden', 'Carl', 'Chandler', 'Clyde', 'David', 'Edgar', 'Elton', 'Floyd', 'Freeman', 'Gavin', 'Hector', 'Henry', 'Ian', 'Jason', 'Joshua', 'Kane', 'Lambert', 'Matthew', 'Morgan', 'Neville', 'Oliver', 'Oscar', 'Perry', 'Quinn', 'Ramsey', 'Scott', 'Seth', 'Spencer', 'Timothy', 'Todd', 'Trevor', 'Udolf', 'Victor', 'Vincent', 'Walton', 'Willis', 'Xavier', 'Yvonne', 'Zack', 'Zane'];
  const HOT = ['北京','上海','广州','深圳']
  export default {
  name:'',
  components:{
    Topheader
   },
  data(){
     return{
       locationing:'正在定位中',
       hotcity:HOT,
       title:'选择城市',
       alphabet: []
     }
   },
   created(){
    this.init()
   },
   mounted(){
     setTimeout(()=>{
       this.locationing = '广州'
     },3500)
   },
   computed: {
   },
   methods: {
     ...mapMutations({
       setCity:'SET_LOCATION_CITY',
     }),
     init(){
       'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').forEach(initial => {
         let cells = NAMES.filter(name => name[0] === initial);
         this.alphabet.push({
           initial,
           cells
         });
       });
     },
     selectCity(item){
       if(!(item==='正在定位中')){
         this.setCity(item)
         this.$router.go(-1)
       }
     }
   }
  }
</script>
<style scoped lang="scss" rel="stylesheet/scss">
  @import '../../styles/variables.scss';
  .page-indexlist {
    margin-top: 40px;
    .page-indexlist-wrapper {
      font-size: $font-size-medium;
      width: 100%;
      border-top: solid 1px $line;
    }
  }
</style>
