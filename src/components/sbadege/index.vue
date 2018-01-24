<template>
  <span
    class="s-badge"
    :style="{ backgroundColor: color }"
    :class="['is-' + type, 'is-size-' + size]">
    <slot></slot>
  </span>
</template>

<script>
  /**
   * sbadege
   * @module components/sbadege
   * @desc 徽章
   * @param {string} [type=primary] 组件样式，可选 primary, error, success, warning
   * @param {string} [color] - 传入颜色值
   * @param {string} [size=normal] - 尺寸，接受 normal, small, large
   *
   * @example
   * <sbadege color="error">错误</sbadege>
   * <sbadege color="#333">30</sbadege>
   */
  export default {
    name: 'sbadege',

    props: {
      color: String,
      type: {
        type: String,
        default: 'primary'
      },
      size: {
        type: String,
        default: 'normal'
      }
    }
  };
</script>
<style scoped lang="scss" rel="stylesheet/scss">
  @import '../../styles/variables.scss';
  // 根据基础色颜色变换
  // https://www.w3cplus.com/preprocessor/sass-color-function.html
    .s-badge {
      margin-right: 5px;
      color: $color-white;
      text-align: center;
      display: inline-block;
      line-height: 12px;
    }
      .is-success{
        color:lighten($success-color,10%);
        background-color:lighten($success-color,38%) ;
      }

      .is-primary {
        color:lighten($blue,10%);
        background-color: lighten($blue,38%);
      }

      .is-error {
        color:lighten($error-color,10%);
        background-color: lighten( $error-color,33% );
      }

     .is-warning {
        background-color: $warning-color;
      }

      .is-size-normal {
        font-size: 14px;
        padding: 2px 6px;
      }

      .is-size-small {
        font-size: 10px;
        padding: 4px;
      }

     .is-size-large {
        font-size: 16px;
        padding: 2px 8px;
      }

</style>
