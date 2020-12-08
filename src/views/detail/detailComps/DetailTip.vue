<template>
  <div class="detail-tip">
    <div class="tip-join" v-show="true">
      !!!加入购物车成功
    </div>

    <div class="tip-add" v-show="false">
      !!!该商品数量+1
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailTip'
}
</script>

<style scoped>
  .tip-join, .tip-add {
    width: 200px;
    height: 50px;
    background: #ff5555;

    position: fixed;
    left: 0;
    right: 0;
    margin: auto auto;
    top: 0;
    bottom: 0;

    text-align: center;
    color: #fff;
    line-height: 50px;
    border-radius: 10px;
    opacity: 0.8;
  }

</style>