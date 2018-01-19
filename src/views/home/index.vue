<template>
  <div class="warpper">
    <div class="banner">
      <img :src="bannerSrc" alt="">
    </div>
      <div class="swiper-container">
        <swiper></swiper>
      </div>
      <div class="hongdong">
        <huodong></huodong>
      </div>
    <div class="second-body">
      <div class="hot-sales">
        <hot-sale></hot-sale>
      </div>
      <div class="hangqing">
        <div class="item title">广州市行情</div>
        <div class="item icon">
          <icon name="angle-right"></icon>
        </div>
      </div>
      <div class="infodetail">
        <info-detail></info-detail>
      </div>
      <div class="card-info">
        <card-info :title=title :textInfo=textInfo :subInfo=subInfo></card-info>
      </div>
      <div class="card-info">
        <card-info :title=title :textInfo=textInfo :subInfo=subInfo></card-info>
      </div>
      <div class="card-info">
        <card-info :title=title :textInfo=textInfo :subInfo=subInfo></card-info>
      </div>
      <div class="tool-wrapper">
        <div class="toop-box">
          <div class="item-link">
            <icon name="question"></icon>
            <span class="link-title">问答</span>
          </div>
          <div class="item-link">
            <icon name="book"></icon>
            <span class="link-title">百科</span>
          </div>
          <div class="item-link">
            <icon name="envelope-open-o"></icon>
            <span class="link-title">计算器</span>
          </div>
          <div class="item-link">
            <icon name="home"></icon>
            <span class="link-title">购房资源</span>
          </div>
          <div class="item-link">
            <icon name="star"></icon>
            <span class="link-title">附件门店</span>
          </div>
        </div>
      </div>
      <div class="room-list-warrper">
        <roomlist></roomlist>
      </div>
    </div>
    <div class="footer">
      <mt-tabbar v-model="selected">
        <mt-tab-item id="首页">
          <img slot="icon" src="../../assets/100x100.png">
          首页
        </mt-tab-item>
        <mt-tab-item id="消息">
          <img slot="icon" src="../../assets/100x100.png">
          消息
        </mt-tab-item>
        <mt-tab-item id="我的">
          <img slot="icon" src="../../assets/100x100.png">
          我的
        </mt-tab-item>
      </mt-tabbar>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import swiper from '@/components/swiper'
import CardInfo from '@/components/cardinfo'
import huodong from '@/views/sales'
import HotSale from '@/views/sales/salespromotion/hotsales'
import InfoDetail from '@/views/infodetail'
import roomlist from '@/views/roomlist'
  export default {
  name:'',
  components:{
   swiper,
    huodong,
    HotSale,
    InfoDetail,
    CardInfo,
    roomlist
   },
  data(){
     return{
       title:'新房优选',
       bannerSrc:'',
       textInfo:'总价150万能买哪',
       subInfo:'用首付的钱买一套房'
     }
   },
   created(){
    this.bannerSrc = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1516783212&di=19d442daabf99b8f22e2c961a17e2bfc&imgtype=jpg&er=1&src=http%3A%2F%2Fpic.90sjimg.com%2Fback_pic%2Fqk%2Fback_origin_pic%2F00%2F02%2F82%2F00618b2a20cbc87ce2d70f8331eff41c.jpg'
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
  .second-body{
    padding:10px;
  }
  .banner{
    width: 100%;
    height: auto;
    img{
      width: 100%;
      height: 100%;
    }
  }
  .hot-sales{
    height: 2rem;
  }
  .hangqing{
    display: flex;
    justify-content:space-between;
    align-items:center;
    margin-top: 25px;
    border-bottom: 1px solid $line;
    height: 40px;
    .title{
      font-size: 18px;
    }
    .icon{
      font-size: 16px;
      color:$text;
    }
  }
  .card-info{
    margin-top: 10px;
  }
  .tool-wrapper{
    margin-top: 15px;
    border-top: 1px solid $line;
    border-bottom: 1px solid $line;
    padding:10px 0;
  }
  .toop-box{
    display: flex;
    flex-wrap: wrap;
    justify-content:center;
    align-items:center;
    font-size: 0;
    .item-link{
      flex: 1;
      flex: 0 0 20%;
      align-self:center;
      text-align: center;
    }
    .fa-icon{
      font-size: 20px;
      color:$black;
    }
    .link-title{
      display: block;
      font-size: 14px;
      margin-top: 0.1rem;
    }
  }
.room-list-warrper{
  margin-top: 15px;
}
  .footer{
    position:fixed;
    width: 100%;
    height: 100%;
    bottom: 0;
    .mint-tabbar{
      background-image:none;
    }
  }
</style>
