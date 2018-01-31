<template>
  <div class="warpper">
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="首页">
        <div class="h-serch"  ref="searchCom" :style="{paddingLeft:paddingLeft + 'px',paddingRight: paddingLeft + 'px',top:searchTop + 'rem'}">
          <router-link to="/searchlist">
            <search :showLocation=true></search>
          </router-link>
        </div>
        <div class="banner">
          <mt-swipe :auto="3000">
            <mt-swipe-item><img  v-lazy="bannerSrc" alt=""></mt-swipe-item>
            <mt-swipe-item><img  v-lazy="bannerSrc2" alt=""></mt-swipe-item>
          </mt-swipe>
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
            <card-info :title=title :cardData=cardData ></card-info>
          </div>
          <div class="card-info">
            <card-info :title="'租一个家'" :cardData=cardData></card-info>
          </div>
          <div class="card-info">
            <card-info :title="'自在旅居'" :cardData=cardData></card-info>
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
            <roomlist :dataList=roomResult @changeType="changeType"></roomlist>
          </div>
        </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="消息">
        222
      </mt-tab-container-item>
      <mt-tab-container-item id="发现">
        333
      </mt-tab-container-item>
      <mt-tab-container-item id="看房">
        444
      </mt-tab-container-item>
      <mt-tab-container-item id="我的">
        555
      </mt-tab-container-item>
    </mt-tab-container>
    <div class="footer">
      <mt-tabbar v-model="selected">
        <mt-tab-item id="首页">
          <icon name="home" slot="icon"></icon>
          首页
        </mt-tab-item>
        <mt-tab-item id="消息">
          <icon name="info-circle" slot="icon"></icon>
          消息
        </mt-tab-item>
        <mt-tab-item id="发现">
          <icon name="compass" slot="icon"></icon>
          发现
        </mt-tab-item>
        <mt-tab-item id="看房">
          <icon name="institution" slot="icon"></icon>
          看房
        </mt-tab-item>
        <mt-tab-item id="我的">
          <icon name="user" slot="icon"></icon>
          我的
        </mt-tab-item>
      </mt-tabbar>
    </div>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script type="text/ecmascript-6">
import swiper from '@/components/swiper'
import CardInfo from '@/components/cardinfo'
import huodong from '@/views/sales'
import HotSale from '@/views/sales/salespromotion/hotsales'
import InfoDetail from '@/views/infodetail'
import roomlist from '@/views/roomlist'
import search from '@/components/search'

import {citySearch} from '@/api/remoteSearch'

import {roomSearch,AllRoomList,cardInfoApi} from '@/api/room'

import {debounce} from '@/utils/index'
  export default {
  name:'',
  components:{
   swiper,
    huodong,
    HotSale,
    InfoDetail,
    CardInfo,
    roomlist,
    search
   },
  data(){
     return{
       title:'新房优选',
       bannerSrc:'',
       searchQuery:'广州',
       bannerSrc2:'',
       paddingLeft:20,
       searchTop:0.3,
       searchValue:'',
       selectValue:'',
       showSearchList:false,
       textInfo:'总价150万能买哪',
       subInfo:'用首付的钱买一套房',
       selected:'首页',
       searchtResult: [],
       roomType:'二手房',
       roomResult:[],
       cardData:[]
     }
   },
   created(){
    this.bannerSrc = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1516783212&di=19d442daabf99b8f22e2c961a17e2bfc&imgtype=jpg&er=1&src=http%3A%2F%2Fpic.90sjimg.com%2Fback_pic%2Fqk%2Fback_origin_pic%2F00%2F02%2F82%2F00618b2a20cbc87ce2d70f8331eff41c.jpg';
      this.bannerSrc2 = 'http://img1.imgtn.bdimg.com/it/u=2573276400,2181455435&fm=27&gp=0.jpg';
      this.getHouse(this.roomType);
      this.getCardInfo()
   },
   mounted(){
     // 原搜索组件默认有个列表占宽，需要去掉
     window.onscroll = this.scroll;
     this.searchDom = this.$refs.searchCom.getElementsByClassName("mint-search")[0]
     this.hideSearchListBug()
     this.searchInput  = this.$refs.searchCom.getElementsByClassName("mint-searchbar-core")[0]
     this.cancelBtn  = this.$refs.searchCom.getElementsByClassName("mint-searchbar-cancel")[0]
     //this.searchValue = this.searchInput.value
     //改为由组件传递值
     //this.searchInput.addEventListener("input", this.changeInputHeight);
     //this.searchInput.addEventListener("blur", this.cancelSearch);
     this.cancelBtn.addEventListener("click", this.cancelSearch);

   },
   computed: {
   },
   methods: {
     scroll() {
         if(window.pageYOffset > 20){
            this.paddingLeft = 0
           this.searchTop = 0
         }else if(window.pageYOffset <40){
           this.paddingLeft = 20
           this.searchTop = 0.3
         }
     },
     changeInputHeight(){
       this.searchValue = this.searchInput.value
     },
     cancelSearch(){
       this.searchValue = ''
       //以下会导致取消后，首次输入关键词查找时候，列表无法展开的bug
      /* this.hideSearchListBug()*/
     },
     hideSearchListBug(){
       this.searchDom.style.height=44 + 'px'
     },
     listnerInput(val){
       // 正确的通过子组件传值过来，而不是通过dom来取值
       this.searchValue = val
     },
     searchCitys(searchQuery){
       citySearch(searchQuery).then(res=>{
         this.searchtResult =  res.data.items
       })
     },
     getHouse(type){
       roomSearch(type).then(res=>{
         this.roomResult =  res.data.items
       })
     },
     changeType(type){
       roomSearch(type).then(res=>{
         this.roomResult =  res.data.items

       })
     },
     getCardInfo(){
       cardInfoApi().then((res)=>{
         this.cardData = res.data.items;
         console.log(res.data.items)
       })
     }
   },
    watch:{
      searchValue(newV){
        if( newV === ''|| newV===undefined){
          this.hideSearchListBug()
     }else{
       debounce(this.searchCitys(newV),1000)
       this.paddingLeft = 0
       this.searchTop = 0
       this.searchDom.style.height = 100+'vh';
     }
      }
    }
  }
</script>
<style scoped lang="scss" rel="stylesheet/scss">
  @import '../../styles/variables.scss';
  /*.img-wrapper{
    padding:5px;
    border:1px solid rgba(226, 226, 226, 0.38);
  }
  .img-erwm{
    display: inline-block;
    padding:5px;
    margin-right: 15px;
    border:1px solid #e2e2e2;
    box-sizing: border-box;
    width: 128px;
    height: auto;
  }
  .img-erwm img{
     width: 100%;
    height: auto;
  }
  .img-info{
    display: block;
    text-align: center;
    font-size: 14px;
  }*/
  .second-body{
    padding:10px;
  }
  .h-serch{
    position: fixed;
    z-index: 99;
    top:.3rem;
    left: 0;
    width: 100%;
    transition: all .2s;
  }
  .banner{
    width: 100%;
    height: 3.5rem;
    margin-bottom: 15px;
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
    z-index: 99;
    width: 100%;
    bottom: 0;
    .mint-tabbar{
      background-image:none;
    }
    .fa-icon{
      width: 48px;
      height: auto;
      color:$icon;
      display: block;
    }
    .is-selected .fa-icon{
      color:$blue;
    }
  }
</style>
