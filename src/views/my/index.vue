<template>
 <div class="my-wrapper">
    <div class="top-section">
      <div class="my-introduce flex-box">
        <div class="avatar flex-item">
          <img v-lazy="imgurl" >
        </div>
        <div class="flex-item my-text-introduce">
          <div class="phonenum">134********50</div>
          <router-link to="/myerji">
            <div class="detail-check">查看并编辑个人资料</div>
          </router-link>
        </div>
      </div>
      <div class="my-guiji flex-box">
        <div class="flex-item">
          <div class="num">0</div>
          <div class="text">看房记录</div>
        </div>
        <div class="flex-item">
          <div class="num">0</div>
          <div class="text">搜素条件</div>
        </div>
      </div>
    </div>
     <div class="my-fouce-wrapper">
       <h4>我的关注</h4>
       <div class="my-fouce flex-box">
         <div class="flex-item">
           <icon name="bookmark-o" class="icon"></icon>
           <span class="text">二手房({{num}})</span>
         </div>
         <div class="flex-item">
           <icon name="bookmark-o" class="icon"></icon>
           <span class="text">新房({{num}})</span>
         </div>
         <div class="flex-item">
           <icon name="bookmark-o" class="icon"></icon>
           <span class="text">租房({{num}})</span>
         </div>
         <div class="flex-item">
           <icon name="bookmark-o" class="icon"></icon>
           <span class="text">小区({{num}})</span>
         </div>
       </div>
     </div>
     <div class="mylist-wrapper">
       <mt-cell
         title="我的经纪人"
         :to="{ name: 'myerji' }"
         is-link>
       </mt-cell>
       <mt-cell
         title="我的点评"
         :to="{ name: 'myerji' }"
         is-link>
       </mt-cell>
       <mt-cell
         title="用户反馈"
         :to="{ name: 'myerji' }"
         is-link>
       </mt-cell>
       <mt-cell
         title="联系客服"
         :to="{ name: 'myerji' }"
         is-link
         value="1666666"
       >
       </mt-cell>
       <mt-cell
         title="官方在线客服"
         :to="{ name: 'myerji' }"
         is-link
       >
       </mt-cell>
     </div>
 </div>
</template>

<script type="text/ecmascript-6">
  const imgurl = 'http://www.qqzhi.com/uploadpic/2015-01-15/055123530.jpg'
  export default {
  name:'',
  components:{
   },
  data(){
     return{
       num:6,
       imgurl:imgurl
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
  @import '../../styles/utils.scss';
  .my-wrapper{
    background-color: $line;
  }
  .top-section{
    background-color: $color-white;

  }
  .my-text-introduce{

  }
  .my-introduce{
    justify-content: center;
    align-items:center;
    font-size: $font-size-medium;
    padding:30px 10px 15px 10px;
    border-bottom: 1px solid $line;
  }
  .avatar{
    display: inline-block;
    flex: 0 0 100px;
    width: 100px;
    img{
      width: 64px;
      height: 64px;
      border-radius: 32px;
      border:2px solid $line;
    }
  }
  .detail-check{
    margin-top: 15px;
    color: $text;
  }
  .my-guiji{
    padding:15px 0;
    font-size: $font-size-medium;
    text-align: center;
  }
  .my-fouce-wrapper{
    padding:0 10px;
    font-size: $font-size-medium;
    margin-top: -15px;
    background-color: $color-white;
    .my-fouce{
      padding:0 0 15px 0;
    }
    h4{
      padding:15px 0;
      font-weight: normal;
      font-size: $font-size-large;
      border-bottom: 1px solid $line;
    }
    .flex-item{
      text-align: center;
      .text{
        display: block;
      }
    }
    .icon{
      font-size: 36px;
    }
  }
  .mylist-wrapper{
    padding-bottom: 60px;
    margin-top: 10px;
  }
</style>
