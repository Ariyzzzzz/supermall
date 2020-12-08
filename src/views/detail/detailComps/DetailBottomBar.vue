<template>
  <div class="bottom-bar">
    <div class="bar-item bar-left">
      <div>
        <i class="icon service"></i>
        <div class="text">客服</div>
      </div>
      <div>
        <i class="icon shop"></i>
        <div class="text">店铺</div>
      </div>
      <div>
        <i class="icon select"></i>
        <div class="text">收藏</div>
      </div>
    </div>
    
    <div class="bar-item bar-right">
      <div class="car" @click="addToCart">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailBottomBar',
  methods: {
    addToCart() {
      this.$emit('addToCart')
    }
  }
}
</script>

<style scoped>
  .bottom-bar {
    height: 49px;
    background-color: #fff;
    position: relative;
    left: 0;
    right: 0;
    z-index: 1000;
    display: flex;
  }

  .bar-left {
    flex: 1;
  }

  .bar-right {
    flex: 1;
  }

  .bar-item {
    display: flex;
  }

  .bar-left div {
    flex: 1;
  }
  .bar-right div {
    flex: 1;
  }

  .car {
    background: yellow;
    text-align: center;
    line-height: 49px;
  }

  .buy {
    background: #ff8198;
    text-align: center;
    line-height: 49px;
  }

  .bar-left .icon {
    display: block;
    width: 22px;
    height: 22px;
    margin: 5px auto 3px;
    background: url("~assets/img/detail/detail_bottom.png") 0 0/100%;
  }

  .bar-left .service {
    background-position: 0 -52px;
  }

  .bar-left .shop {
    background-position: 0 -98px;
  }

  .text {
    font-size: 13px;
    text-align: center;
  }
</style>