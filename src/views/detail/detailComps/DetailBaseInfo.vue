<template>
  <div v-if="Object.keys(goods).length !== 0" class="base-info">
    <div class="info-title">{{goods.title}}</div>
    <div class="info-price">
      <span class="n-price">{{goods.newPrice}}</span>
      <span class="o-price">{{goods.oldPrice | filterPrice}}</span>
      <span class="discount" v-if="goods.discount">{{goods.discount}}</span>
    </div>
    <div class="info-columns">
      <span class="left">{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span class="right">{{goods.services[goods.services.length-1].name}}</span>
    </div>
    <div class="info-services">
      <span v-for="index in goods.services.length-1" :key="index">
        <img :src="goods.services[index].icon" alt="">
        <span>{{goods.services[index].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailBaseInfo',
  props: {
    goods: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  filters: {
    filterPrice(oldPrice) {
      return "￥" + oldPrice
    }
  }
}
</script>

<style scoped>
.base-info {
  margin-top: 15px;
  padding: 0 8px;
  color: #999;
  border-bottom: 5px solid #f2f5f8;
}

.info-title {
  color: #222;
}

.info-price {
  padding: 10px 0;
}

.n-price {
  color: #ff5777;
  font-size: 20px;
}

.o-price {
  text-decoration: line-through;
  padding: 0 5px;
}

.discount {
  font-size: 14px;
  background-color: #ff5777;
  color: #fff;
  border-radius: 4px;
  position: relative;
  bottom: 10px;
}

.info-columns {
  display: flex;
  padding: 0 0 10px 0;
  border-bottom: 3px solid #f2f5f8;
}

.info-columns span {
  flex: 1;
  text-align: center;
}

.info-columns .left {
  text-align: left;
  border-right: 1px solid black;
}

.info-columns .right {
  text-align: right;
  border-left: 1px solid black;
}

.info-services {
  display: flex;
  font-size: 14px;
  padding: 10px;
}

.info-services span {
  margin: 0 auto;
}

.info-services img {
  width: 13px;
  height: 13px;
}


</style>