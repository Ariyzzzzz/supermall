<template>
  <tab-bar>
      <tab-bar-item path="/home" >
        <img slot="item-img" src="~assets/img/tabbar/首页.png" alt="">
        <img slot="item-img-active" src="~assets/img/tabbar/首页红.png" alt="">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category" >
        <img slot="item-img" src="~assets/img/tabbar/分类.png" alt="">
        <img slot="item-img-active" src="~assets/img/tabbar/分类1.png" alt="">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart" >
        <img slot="item-img" src="~assets/img/tabbar/购物车.png" alt="">
        <img slot="item-img-active" src="~assets/img/tabbar/购物车1.png" alt="">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile" >
        <img slot="item-img" src="~assets/img/tabbar/我的.png" alt="">
        <img slot="item-img-active" src="~assets/img/tabbar/我的1.png" alt="">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
</template>

<script>

import TabBar from '@/components/common/tabbar/TabBar'
import TabBarItem from '@/components/common/tabbar/TabBarItem'

export default {
  name: 'MainTabBar',
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style>

</style>