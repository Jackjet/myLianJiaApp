<template>
  <div class="warpper">
    <div class="box">
      <div class="item">
        <div class="info">
          <div class="info-item">
            <h6 class="item-title">降价急售放</h6>
            <span class="item-text">好房抢先看</span>
          </div>
          <div class="info-item">
            <img src="../../assets/img/icon.png" alt="">
          </div>
        </div>
      </div>
      <div class="item">
        <div class="info">
          <div class="info-item">
            <h6 class="item-title">降价急售放</h6>
            <span class="item-text">好房抢先看</span>
          </div>
          <div class="info-item">
            <img src="../../assets/img/icon.png" alt="">
          </div>
        </div>
      </div>

    </div>

    <div class="box">
      <div class="item">
        <div class="info">
          <div class="info-item">
            <h6 class="item-title">降价急售放</h6>
            <span class="item-text">好房抢先看</span>
          </div>
          <div class="info-item">
            <img src="../../assets/img/icon.png" alt="">
          </div>
        </div>
      </div>
      <div class="item">
        <div class="info">
          <div class="info-item">
            <h6 class="item-title">降价急售放</h6>
            <span class="item-text">好房抢先看</span>
          </div>
          <div class="info-item">
            <img src="../../assets/img/icon.png" alt="">
          </div>
        </div>
      </div>

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
   }
  }
</script>
<style scoped lang="scss" rel="stylesheet/scss">
  @import '../../styles/variables.scss';
  .warpper .box:last-child{
    margin-top: -10px;
  }
  .box{
    display: flex;
    flex-wrap: wrap;
    justify-content:center;
    align-items:center;
  }
  .box .item:first-child{
    padding-right:5px;
  }
  .box .item:last-child{
    padding-left:5px;
  }
  .item{
    flex: 1;
    flex: 0 0 50%;
    align-self:center;
    text-align: center;
    padding: 10px;
    .info{
      display: flex;
      justify-content: space-between;
      align-items:center;
      background-color: $bg-grey;

    }
    .info-item{
      display: flex;
      flex-direction:column;
      align-items: flex-start;
    }
    img{
      width: 1.2rem;
      height: auto;
    }
  }
  .info{
    display: flex;
    padding: 10px;
  }
  .item-title{
    display: inline;
    font-size: 14px;
    margin: 0 0 10px 0px;
  }
  .item-text{
    display: inline;
    font-size: 12px;
    color: $text;
  }
</style>
