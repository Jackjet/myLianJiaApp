<template>
  <swiper :options="swiperOption"  ref="mySwiper"  class="swiper-container">
    <swiper-slide v-for="(slide,index) in swiperSlides" :key="index"  class="swiper-slide link-container">
      <div class="item-link">
        <icon name="home" class="ershoufang"></icon>
        <span class="link-title">二手房</span>
      </div>
      <div class="item-link">
        <icon name="tachometer"  class="xinfang"></icon>
        <span class="link-title">新房</span>
      </div>
      <div class="item-link">
        <icon name="flag"  class="zufang"></icon>
        <span class="link-title">租房</span>
      </div>
      <div class="item-link">
        <icon name="map"  class="haiwai"></icon>
        <span class="link-title">海外</span>
      </div>
      <div class="item-link">
        <icon name="plane"  class="luju"></icon>
        <span class="link-title">旅居</span>
      </div>
      <div class="item-link">
        <icon name="soccer-ball-o"  class="hjqy"></icon>
        <span class="link-title">环京区域</span>
      </div>
      <div class="item-link">
        <icon name="map-marker"  class="dtzf"></icon>
        <span class="link-title">地图找房</span>
      </div>
      <div class="item-link">
        <icon name="delicious"  class="xq"></icon>
        <span class="link-title">小区</span>
      </div>
      </swiper-slide>
    <div class="swiper-pagination swiper-pagination-center" slot="pagination"></div>
  </swiper>
</template>

<script>
  export default {
    name: 'carrousel',
    data() {
      return {
        swiperOption: {
          //是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
          notNextTick: true,
          pagination: '.swiper-pagination',
          slidesPerView: 'auto',
          centeredSlides: true,
          paginationClickable: true,
          spaceBetween: 30,
          onSlideChangeEnd: swiper => {
            //这个位置放swiper的回调方法
            this.page = swiper.realIndex+1;
            this.index = swiper.realIndex;
          }
        },
        swiperSlides: [1, 2]
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper;
      }
    },
    mounted() {

    }
  }
</script>
<style scoped lang="scss" rel="stylesheet/scss">
  @import '../../styles/variables.scss';
  .link-container{
    display: flex;
    flex-wrap: wrap;
    justify-content:center;
    align-items:center;
    .item-link{
      flex: 1;
      flex: 0 0 25%;
      align-self:center;
      text-align: center;
      margin-bottom: 10px;
      color: $text2;
    }
    .fa-icon{
      width: .7rem;
      color:$blue;
    }
    .ershoufang{
      color:#00c482;
    }
    .xinfang{
      color:#ff8957;
    }
    .zufang{
      color:#fdb257;
    }
    .haiwai{
      color:#4aa0ff;
    }
    .luju{
      color:#2ac1e6;
    }
    .hjqy{
      color:#f7776a;
    }
    .dtzf{
      color:#e6c053;
    }
    .xq{
      color:#25bfa7;
    }
    .link-title{
      display: block;
      font-size: 14px;
      margin-top: -0.2rem;
    }
  }
</style>
