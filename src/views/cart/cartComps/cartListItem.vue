<template>
  <div class="shop-item">
    <div class="item-selector">
      <check-button :isChecked="product.isChecked" @click.native="checkClick"></check-button>
    </div>

    <div class="item-image">
      <img :src="product.image" alt="">
    </div>

    <div class="item-info">
      <div class="info-title">{{product.title}}</div>
      <div class="info-desc">{{product.desc}}</div>
      <div class="info-bottom">
        <div class="bottom-price left">￥{{product.newPrice}}</div>
        <div class="bottom-count right">×{{product.count}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from 'components/content/checkButton/CheckButton.vue'

export default {
  name: 'cartListItem',
  props: {
    product: {
      type: Object,
      default: {}
    }
  },
  components: { 
    CheckButton 
  },
  methods: {
    checkClick() {
      this.product.isChecked = !this.product.isChecked
    }
  }
}
</script>

<style scoped>
  .shop-item {
    width: 100%;
    display: flex;
    padding: 5px;
    font-size: 0;
    border-bottom: 1px solid #aaa;
  }

  .item-selector {
    width: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .item-image {
    padding: 5px;
  }

  .item-image img{
    width: 80px;
    display: block;
    border-radius: 5px;
  }

  .info-title, .info-desc {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .item-info {
    font-size: 17px;
    color: #333;
    padding: 5px 10px;
    overflow: hidden;
    position: relative;
  }

  .item-info .info-desc {
    font-size: 14px;
    color: #666;
    margin-top: 15px;
  }

  .info-bottom {
    margin-top: 10px;
    position: absolute;
    left: 10px;
    right: 10px;
    bottom: 10px;
  }
  .bottom-price {
    color: orange;
  }
</style>