<template>
  <div class="goods-list-item" @click="itemClick">
    <img :src="showImage" alt="" @load="imageLoad">
    <div class="goods-info">
      <p>{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price}}</span>
      <span class="collect">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoodsListItem',
  props: {
    goodsItem: {  
      type: Object,
      default: {}
    }
  },
  methods: {
    imageLoad() {
      this.$bus.$emit('itemImageLoad')

      // if(this.$route.path.indexOf('/home')) {
      //   this.$bus.$emit('homeImageLoad')
      // }else if(this.$route.path.indexOf('/detail')) {
      //   this.$bus.$emit('detailImageLoad')
      // }
      
    },
    itemClick() {
      this.$router.push('/detail/' + this.goodsItem.iid)
    }
  },
  computed: {
    showImage() {
      return this.goodsItem.image || this.goodsItem.show.img
    }
  }
}
</script>

<style scoped>
  .goods-list-item {
    padding-bottom: 40px;
    position: relative;

    width: 48%;
  }

  .goods-list-item img {
    width: 100%;
    border-radius: 5px;
  }

  .goods-info {
    font-size: 14px;
    position: absolute;
    overflow: hidden;
    left: 0;
    right: 0;
    bottom: 5px;
    text-align: center;
  }

  .goods-info p {
    overflow: hidden;
    margin-bottom: 3px;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .goods-info .price {
    color: #ff8198;
    margin-right: 20px;
  }

  .goods-info .collect {
    position: relative;
  }

  .goods-info .collect::before {
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  }
</style>