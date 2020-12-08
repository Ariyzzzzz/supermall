<template>
  <div class="wrapper" ref="wrapper">
    <ul class="content">
      <li>里诶啊哦</li>
      <li>里诶啊哦</li>
      <li>里诶啊哦</li>
      <li>里诶啊哦</li>
      <li>里诶啊哦</li>
      <li>里诶啊哦</li>
      <li>里诶啊哦</li>
      <li>里诶啊哦</li>
      <li>里诶啊哦</li>
      <li>里诶啊哦</li>
      <li>里诶啊哦</li>
      <li>里诶啊哦</li>
      <li>里诶啊哦</li>
      <li>里诶啊哦</li>
      <li>里诶啊哦</li>
      <li>里诶啊哦</li>
      <li>里诶啊哦</li>
      <li>里诶啊哦</li>
      <li>里诶啊哦</li>
      <li>里诶啊哦</li>
      <li>里诶啊哦</li>
      <li>里诶啊哦</li>
      <li>里诶啊哦</li>
      <li>里诶啊哦</li>
      <li>里诶啊哦</li>
      <li>里诶啊哦</li>
      <li>里诶啊哦</li>
      <li>里诶啊哦</li>
      <li>里诶啊哦</li>
      <li>里诶啊哦</li>
      <li>里诶啊哦</li>
      <li>里诶啊哦</li>
      <li>里诶啊哦</li>
      <li>里诶啊哦</li>
      <li>里诶啊哦</li>
      <li>里诶啊哦</li>
      <li>里诶啊哦</li>
      <li>里诶啊哦</li>
      <li>里诶啊哦</li>
      <li>里诶啊哦</li>
      <li>里诶啊哦</li>
      <li>里诶啊哦</li>
      <li>里诶啊哦</li>
      <li>里诶啊哦</li>
      <li>里诶啊哦</li>
      <li>里诶啊哦</li>
      <li>里诶啊哦</li>
      <li>里诶啊哦</li>
      <li>里诶啊哦</li>
      <li>里诶啊哦</li>
      <li>里诶啊哦</li>
      <li>里诶啊哦</li>
      <li>里诶啊哦</li>
      <li>里诶啊哦</li>
      <li>里诶啊哦</li>
      <li>里诶啊哦</li>
      <li>里诶啊哦</li>
      <li>里诶啊哦</li>
      <li>里诶啊哦</li>
      <li>里诶啊哦</li>
      <li>里诶啊哦</li>
      <li>里诶啊哦</li>
      <li>里诶啊哦</li>
      <li>里诶啊哦</li>
      <li>里诶啊哦</li>
      <li>里诶啊哦</li>
      <li>里诶啊哦</li>
      <li>里诶啊哦</li>
      <li>里诶啊哦</li>
      <li>里诶啊哦</li>
      <li>里诶啊哦</li>
      <li>里诶啊哦</li>
      <li>里诶啊哦</li>
      <li>里诶啊哦</li>
      <li>里诶啊哦</li>
      <li>里诶啊哦</li>
      <li>里诶啊哦</li>
      <li>里诶啊哦</li>
      <li>里诶啊哦</li>
      <li>里诶啊哦</li>
      <li>里诶啊哦</li>
      <li>里诶啊哦</li>
      <li>里诶啊哦</li>
      <li>里诶啊哦</li>
      <li>里诶啊哦</li>
      <li>里诶啊哦</li>
      <li>里诶啊哦</li>
      <li>里诶啊哦</li>
      <li>里诶啊哦</li>
      <li>里诶啊哦</li>
      <li>里诶啊哦</li>
      <li>里诶啊哦</li>
      <li>里诶啊哦</li>
      <li>里诶啊哦</li>
      <li>里诶啊哦</li>
      <li>里诶啊哦</li>
      <li>里诶啊哦</li>
      <li>里诶啊哦</li>
      <li>里诶啊哦</li>
      <li>里诶啊哦</li>
    </ul>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: 'Category',
  data() {
    return {
      scroll: null
    }
  },
  mounted() {
    // console.log(this.$refs.wrapper);
    // console.log(document.querySelector('.wrapper'));
    this.scroll = new BScroll(this.$refs.wrapper, {
      probeType: 3,
      pullUpLoad: true
    }) 
    
    this.scroll.on('scroll', (position) => {
      console.log(position);
    })

    this.scroll.on('pullingUp', () => {
      console.log('上啦加载更多');
    })
  }
}
</script>

<style scoped>
.wrapper {
  height: 150px;
  background-color: red;
  overflow: hidden;

  /* overflow-y: scroll; */
}
</style>