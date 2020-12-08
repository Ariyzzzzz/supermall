import { debounce } from "common/utils";

export const itemListenerMixin = {
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh, 50)

    this.$bus.$on('itemImageLoad', () => {
      refresh()
    })
    // console.log('我是混入的');
  }
}