<template>
 <div class="home-detail" >
   <topheader ref="topheader" @duibi="duibi" @info="info" @share="share" :opacitys="thePercent"></topheader>
   <div class="swipe-wrapper">
     <mt-swipe :show-indicators="false" :auto="0">
       <mt-swipe-item v-for="(item,index) in dataList" :key="index">
         <img class="swipe-item-img"  v-lazy="item.url">
       </mt-swipe-item>
     </mt-swipe>
   </div>
   <div class="content-body">
     <div class="title">{{houseItem.title}}</div>
     <div class="house-info flex-box">
       <div class="flex-item item-property">
         <span class="title">售价</span>
         <span class="item-info">{{houseItem.totalPrice}}</span>
       </div>
       <div class="flex-item item-property">
         <span class="title">房型</span>
         <span class="item-info item-property">{{houseItem.roomType}}</span>
       </div>
       <div class="flex-item item-property">
         <span class="title">建筑面积</span>
         <span class="item-info">{{houseItem.squerySize}}</span>
       </div>
     </div>
     <div class="house-info-detail">
       <div class="content-list flex-box">
         <div class="flex-item">
           <span class="list-title">单价:</span>
           <span class="list-item-info">{{houseItem.price}}</span>
         </div>
         <div class="flex-item">
           <span class="list-title">挂牌:</span>
           <span class="list-item-info">{{houseItem.guapai}}</span>
         </div>
       </div>
       <div class="content-list flex-box">
         <div class="flex-item">
           <span class="list-title">朝向:</span>
           <span class="list-item-info">{{houseItem.chaoxiang}}</span>
         </div>
         <div class="flex-item">
           <span class="list-title">楼层:</span>
           <span class="list-item-info">{{houseItem.louchen}}</span>
         </div>
       </div>
       <div class="content-list flex-box">
         <div class="flex-item">
           <span class="list-title">楼型:</span>
           <span class="list-item-info">{{houseItem.louxing}}</span>
         </div>
         <div class="flex-item">
           <span class="list-title">电梯:</span>
           <span class="list-item-info">{{houseItem.dianti}}</span>
         </div>
        </div>
       <div class="content-list flex-box">
         <div class="flex-item">
           <span class="list-title">装修:</span>
           <span class="list-item-info">{{houseItem.zhuangxiu}}</span>
         </div>
         <div class="flex-item">
           <span class="list-title">年代:</span>
           <span class="list-item-info">{{houseItem.niandai}}</span>
         </div>
       </div>
       <div class="content-list flex-box">
         <div class="flex-item">
           <span class="list-title">用途:</span>
           <span class="list-item-info">{{houseItem.yongtu}}</span>
         </div>
         <div class="flex-item">
           <span class="list-title">权属:</span>
           <span class="list-item-info">{{houseItem.quanshu}}</span>
         </div>
       </div>
       <div class="content-list">
         <div class="single-item">
           <span class="list-title">房源编码:</span>
           <span class="list-item-info">{{houseItem.fangyuanbianma}}</span>
         </div>
       </div>
       <div class="content-list">
         <div class="single-item">
           <span class="list-title">有效期:</span>
           <span class="list-item-info">{{houseItem.youxiaoqi}}</span>
         </div>
       </div>
       <div class="content-list">
         <div class="single-item">
           <span class="list-title">首付预算:</span>
           <span class="list-item-info">{{houseItem.shoufuyusuan}}</span>
         </div>
       </div>
       <div class="content-list">
         <div class="single-item">
           <span class="list-title">小区:</span>
           <span class="list-item-info">{{houseItem.xiaoqu}}</span>
         </div>
       </div>
     </div>
     <div class="more-info">
       更多房源信息
     </div>
     <div class="hxgj-wrapper">
       <span class="title">户型格局</span>
       <div class="hxgj flex-box">
         <div class="flex-item">
           <div class="hxgj-info">
             <div class="info-item">
               客厅:35.8m²/南北/落地窗
             </div>
             <div class="info-item">
               卧室A:13.8m²/北/落地窗
             </div>
             <div class="info-item">
               卧室B:13.2m²/北/落地窗
             </div>
           </div>
         </div>
         <div class="flex-item">
           <img class="hxgj-img" v-lazy="huxingurl" >
         </div>
       </div>
     </div>
   </div>
   <div class="house-map">
     <el-amap vid="amapDemo" :zoom="zoom" :center="center" class="amap-demo">
     <el-amap-circle v-for="(circle,index) in circles" :center="circle.center" :key="index" :radius="circle.radius" :fill-opacity="circle.fillOpacity" :events="circle.events"></el-amap-circle>
       <el-amap-info-window
         :position="currentWindow.position"
         :visible="currentWindow.visible"
         :events="currentWindow.events"
         :size="currentWindow.size"
       >
         <div :style="slotStyle">
           {{ mapLocation }}
         </div>
       </el-amap-info-window>
     </el-amap>
   </div>
   <div class="sub-detail">
     <div class="house-introduce mycell-wrapper" >
       <mt-cell ref="mycell"
                title="房源介绍"
                to="//github.com"
                is-link
       >
       </mt-cell>
     </div>
     <div class="jjr-fankui mycell-wrapper">
       <mt-cell ref="mycell2" title="经纪人带看" label="2018.03.11"  :to="{ name: 'houseintroduce' }">
         <img class="avarter" v-lazy="jjravart">
       </mt-cell>
     </div>
     <div class="fydt">
       <div class="title">房源动态</div>
       <div class="fydtflex flex-box">
         <div class="flex-item">
           <div class="title">近7日带看(次)</div>
           <div class="info">6</div>
         </div>
         <div class="flex-item">
           <div class="title">近30日带看(次)</div>
           <div class="info">16</div>
         </div>
         <div class="flex-item">
           <div class="title">关注房源(人)</div>
           <div class="info">26</div>
         </div>
       </div>
       <div class="sub-fydt">
         <mt-cell ref="mycell3"
                  title="带看记录"
                  to="//github.com"
                  is-link
         >
           <span>最近带看2018.03.15</span>
         </mt-cell>
         <mt-cell ref="mycell4"
                  title="房源时间轴"
                  to="//github.com"
                  is-link
         >
           <span>挂牌时间2018.03.15</span>
         </mt-cell>
       </div>
     </div>
   </div>
   <div class="bottom-popup">
     <mt-popup style="width: 100%" v-model="popupVisible" position="bottom" class="mint-popup-4">
       <share @cancle="cancle"></share>
     </mt-popup>
   </div>
   <transition name="fade" mode="out-in">
     <router-view></router-view>
   </transition>
   </div>
</template>

<script type="text/ecmascript-6">
  const  url1='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1520933055025&di=c21cf0eab87a2cfba7c088d44ef4548f&imgtype=0&src=http%3A%2F%2Fpic.tugou.com%2FDT%2F1456967467_358787.jpg'
  const  url2='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1520933055025&di=1aaa26427e991df50961694f91e7abdc&imgtype=0&src=http%3A%2F%2Fimg.taopic.com%2Fuploads%2Fallimg%2F110317%2F119-11031F3193493.jpg'
  const url3='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1520933055024&di=1a5981007320f2137819b9b82185532f&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F37d3d539b6003af36dd1134d3e2ac65c1038b6b0.jpg'
  const url4 = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1521002951324&di=1ed452e118748ac03b88592f15d3ab10&imgtype=0&src=http%3A%2F%2Fimgs.focus.cn%2Fupload%2Fjiangmen%2F26770%2Fa_267697773.jpg'
  const headerH = 40;
  import {getHouseDetai} from '@/api/remoteSearch'
  import Topheader from '@/components/Topheader'
  import Share from '@/components/Share'
  export default {
  name:'',
  components:{
    Topheader,
    Share
   },
  data(){
     return{
      actions: [],
      popupVisible:false,
      jjravart:'http://img1.imgtn.bdimg.com/it/u=2564480903,531105440&fm=11&gp=0.jpg',
      houseId:'',
      houseItem:'',
      thePercent:1,
      mapLocation:'华师啊！',
      huxingurl:url4,
      markers: [],
      dataList:[
         {url:url1},
         {url:url2},
         {url:url3},
       ],
       slotStyle: {
         color: '#333',
         fontSize:'16px',
         fontWeight:'blod'
       },
       zoom: 12,
       center: [121.5273285, 31.21515044],
       circles: [
         {
           center: [121.5273285, 31.21515044],
           radius: 150,
           fillOpacity: 0.5,
           events: {
             click: () => {
               alert('click');
             }
           }
         }
       ],
       currentWindow:
          {
           position: [121.5273285, 31.21515044],
           size:[120,50],
           template: `<div :style="slotStyle" class="map-location">{{ mapLocation }}</div>`,
           visible: true,
           events: {
             close() {
               console.log('close infowindow2');
             }
           }
         }

     }

   },
   created(){
    this.houseId = this.$route.params.id
   },
   mounted(){
     this.getHouseDetai(this.houseId)
     this.initCellCss(this.$refs.mycell.$el.children[2])
     this.initCellCss(this.$refs.mycell2.$el.children[1])
     this.initCellCss(this.$refs.mycell3.$el.children[2])
     this.initCellCss(this.$refs.mycell4.$el.children[2])
     this.actions = [{
       name: '拍照',
       method: this.takePhoto
     }, {
       name: '从相册中选择',
       method: this.openAlbum
     }];
     this.onWindowScroll()
   },
   computed: {
   },
   methods: {
     getHouseDetai(id){
       getHouseDetai(id).then(res=>{
          this.houseItem = res.data.item[0]
          this.mapLocation = this.houseItem.xiaoqu
       })
     },
    initCellCss(dom){
      dom.style.backgroundImage = 'none'
    },
     takePhoto() {
       console.log('taking photo');
     },

     openAlbum() {
       console.log('opening album');
     },
     duibi(){
       this.$router.push({ name: 'erji', params: { houseId: this.houseId }})
     },
     info(){
       this.duibi()
     },
     share(){
       this.popupVisible = true
     },
     cancle(){
       this.popupVisible = false
     },
     onWindowScroll(){
       let that = this
       // 坑！！！！！ window对象里面的this 是指向window啊
       window.onscroll = function(){
         let t = document.documentElement.scrollTop || document.body.scrollTop;
         let percent = headerH / t

         if(percent>=0.1 && percent <=1){
           that.thePercent = Math.min(percent,0.5)
         }else if(percent>1){
           that.thePercent =  1
         }
       }
     }
   }
  }
</script>
<style scoped lang="scss" rel="stylesheet/scss">
  @import '../../styles/variables.scss';
  @import '../../styles/mixin.scss';
  @import '../../styles/transition.scss';
  .swipe-wrapper{
    height:5rem;
  }
  .swipe-item-img{
    height: 5rem;
    width: 100%;
  }
  .content-body{
    padding:10px;
    .title{
      padding:10px 0;
      font-size: $font-size-large-x;
      color: $black;
    }
    .house-info{
      border-top:1px solid $line;
      border-bottom:1px solid $line;
    }
    .flex-box{
      padding:10px 0;
      .title{
        display: block;
        padding: 5px 0;
        color:$text2;
        font-size: $font-size-small;
      }
    }

    .item-info{
      display: block;
      color:$red;
      font-size: $font-size-large;
    }
    .hxgj-wrapper{
      font-size: 0;
      padding:10px 0;
      border-top:1px solid $line;
      .title{
        padding:0;
        font-size: $font-size-medium;
        color:$black
      }
    }
    .hxgj{
      .hxgj-info{
        font-size: $font-size-medium;
        color:$text
      }
      .hxgj-img{
        width: 100%;
        height: 1.5rem;
      }
      .info-item{
         margin:5px 0;
       }
      .info-item:first-child{
        margin:0;
      }
    }
  }
  .flex-box{
    @include flex-box();
    .item-property:last-child{
      margin-right: 0;
      border-right:none;
    }
  }
  .flex-item{
    margin-right: 10px;
    @include flex-item();
  }
  .item-property{
    border-right:1px solid $line;
  }
  .house-info-detail{
    .content-list{
      font-size: 0;
      padding:8px 0;
      .list-title{
        display: inline;
        padding: 5px 0;
        color:$text2;
        font-size: $font-size-medium;
      }
      .list-item-info{
        display: inline-block;
        margin-left: 5px;
        color:$black;
        font-size: $font-size-medium-x;
      }
    }

  }
  .more-info{
    padding:12px 0;
    margin:10px 0;
    text-align: center;
    color: $blue;
    background: $line;
    font-size: $font-size-medium-x;
  }
  .house-map{
    width: 100%;
    height: 4rem;
  }
  .map-location{
    font-size: $font-size-medium;
    color: $black;
  }
  .jjr-fankui{
    .avarter{
      width:32px;
      height: 32px;
      border-radius: 16px;
    }
  }
  .mint-cell:last-child,.mint-cell-wrapper {
     padding:10px 0;
     background-image: none !important;
  }
  .mint-cell:last-child{
    .mint-cell-wrapper{
      background-image: none !important;
    }
  }

  .sub-detail{
    background: $line;
    .mint-cell{
      padding:8px 0;
      border-top: 1px solid $line;
    }
  }
  .fydt{
    padding:0 10px;
    background: $color-white;
    margin-top: 15px;
    & >.title{
      padding:10px 0;
      font-size: $font-size-large;
    }
    .mint-cell:last-child,.mint-cell-wrapper {
      background-image: none !important;
    }
    .fydtflex{
      .title{
        font-size: $font-size-small;
        color: $text;
      }
      .info{
        margin:5px 0 10px 10px;
        font-size: $font-size-large-x;
      }

    }
  }
</style>
