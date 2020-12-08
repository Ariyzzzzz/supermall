<template>
  <div id="cart">
    <nav-bar class="cart-nav"><div slot="center">购物车({{$store.state.cartList.length}})</div></nav-bar>

    <cart-list></cart-list>

    <cart-bottom-bar></cart-bottom-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
import CartList from './cartComps/cartList.vue'
import CartBottomBar from './cartComps/cartBottomBar.vue'

export default {
  name: 'Cart',
  components: {
    NavBar,
    CartList,
    CartBottomBar
  }
}

</script>

<style scoped>
  #cart {
    height: 100vh;
  }

  .cart-nav {
    background: #ff8198;
    color: #fff;
  }
</style>