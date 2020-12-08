<template>
  <div class="tabbar-item" @click="itemClick">
    <div v-if="isActive"><slot name="item-img-active"></slot></div>
    <div v-else><slot name="item-img"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name: 'TabBarItem',
  props: {
    path: String,
    activeColor: {
      type: String,
      default: 'deeppink'
    }
  },
  data() {
    return {
      // isActive: true
    }
  },
  computed: {
    isActive() {
      return this.$route.path == this.path
    },
    activeStyle() {
      return this.isActive ? {color: this.activeColor} : {}
    }
  },
  methods: {
    itemClick() {
      this.$router.push(this.path)
    }
  }
}
</script>

<style scoped>
  .tabbar-item{
    flex: 1;
    text-align: center;
    height: 49px;
    
  }

  .tabbar-item img{
    width: 24px;
    height: 24px;
    vertical-align: middle;
  }


</style>