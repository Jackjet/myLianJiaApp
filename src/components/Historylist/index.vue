<template>
  <div class="search-list" v-show="searches.length">
    <div class="history-text">
      <span>历史搜索</span>
      <icon name="trash"  class="icon-delete"  @click.stop="deleteAll"></icon>
    </div>
    <transition-group name="list" tag="ul">
      <li :key="item" class="search-item" @click="selectItem(item)" v-for="item in searches">
        <span class="text">{{item}}</span>
        <icon name="trash"  class="icon-delete"  @click.stop="deleteOne(item)"></icon>
      </li>
    </transition-group>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      searches: {
        type: Array,
        default: []
      }
    },
    methods: {
      selectItem(item) {
        this.$emit('select', item)
      },
      deleteOne(item) {
        this.$emit('delete', item)
      }
    }
  }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
  @import '../../styles/variables.scss';
  @import '../../styles/mixin.scss';
  .search-list{
    ul{
      width: 100%;
      margin:0;
      padding:0;
    }
    .history-text{
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 40px;
      line-height: 40px;
      padding:0 10px;
      background: lighten($black,83%);
      color:$text2;
      font-size: $font-size-medium-x;
    }
    .search-item{
      display: flex;
      align-items: center;
      justify-content: space-between;
      line-height: 40px;
      overflow: hidden;
      padding:0 10px;
      @include border-1px($line);
      &.list-enter-active, &.list-leave-active{
        transition: all 0.1s
      }

      &.list-enter, &.list-leave-to{
        height: 0;
      }

      .text {
        color: $text2;
        font-size: $font-size-medium-x;
      }
      .icon-delete{
        font-size: $font-size-medium-x;
        color: $text2;
      }

    }
  }
</style>
