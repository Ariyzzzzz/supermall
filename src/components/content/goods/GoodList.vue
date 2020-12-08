<template>
  <div class="good-list">
    <goods-list-item v-for="item in goods" :key="item.index" :goodsItem="item"></goods-list-item>
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem.vue'


export default {
  components: { GoodsListItem },
  name: 'GoodList',
  props: {
    goods: {  
      type: Array,
      default: []
    }
  },
}
</script>

<style scoped>
  .good-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    padding: 2px;
  }
</style>