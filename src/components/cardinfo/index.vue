<template>
  <div class="info-card">
    <div class="title">{{title}}</div>
    <div class="card-container">
      <mt-swipe :auto=number >
        <mt-swipe-item v-for="(item,index) in cardData" :key="index">
          <div class="item-box">
            <div class="item-img"  v-for="(subItem,subIndex) in item.card">
              <div class="img-container">
                <img :src="subItem.img" >
              </div>
              <div class="info-titile-wrraper">
                <span class="info-title">
                  {{subItem.textInfo}}
                </span>
                <span class="sub-title">
                   {{subItem.subInfo}}
                 </span>
              </div>
            </div>
          </div>
        </mt-swipe-item>
      </mt-swipe>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name:'cardinfo',
    components:{
    },
    props:{
      title: {
        type: String,
        default: ''
      },
      cardData:{
        default:''
      },
      textInfo: {
        type: String,
        default: ''
      },
      subInfo: {
        type: String,
        default: ''
      },
      number:{
        type:Number,
        default:0
      }
    },
    data(){
      return{
        hotSales:"http://img5.imgtn.bdimg.com/it/u=617181117,1601598812&fm=27&gp=0.jpg",
        hotSales2:"http://img5.imgtn.bdimg.com/it/u=385156745,117573264&fm=27&gp=0.jpg"
      }
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
  .info-card{
    margin-top: 15px;
  }
  .title{
    font-size: 18px;
    font-weight: 400;
    padding-bottom: 10px;
  }
  .card-container{
    width: 100%;
    height: 2.5rem;
  }
  .item-box{
    display: flex;
  }
  .item-box .item-img{
    flex: 1;
    flex: 0 0 50%;
    align-self:center;
    text-align: center;
    &:first-child{
      padding-right: 5px;
    }
    &:last-child{
      padding-left: 5px;
    }
    img{
      position: relative;
      width: 100%;
      height: 1.5rem;
    }
    .img-container{
    }
    .info-titile-wrraper{
      text-align: left;
    }
    // 超出省略号显示http://www.daqianduan.com/6179.html
    .info-title{
      display: block;
      font-size: 16px;
      margin-bottom: 5px;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
      overflow: hidden;
    }
    .sub-title{
      display: block;
      font-size: 12px;
      color:$text;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
      overflow: hidden;
    }
  }
</style>
