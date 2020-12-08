<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav"
                    @titleClick="titleClick"
                    ref="nav"></detail-nav-bar>
    <scroll class="content" ref="scroll" :probeType=3 @scroll="contentScroll">
      <detail-swiper :topImages="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info :detailInfo="detailInfo" @imageLoad="imageLoad"></detail-goods-info>
      <detail-param-info ref="param" :paramInfo="paramInfo"></detail-param-info>
      <detail-commont-info ref="commont" :commontInfo="commontInfo"></detail-commont-info>
      <good-list ref="goods" :goods="recommend"></good-list>
    </scroll>

    <toast :message="message" :show="show"></toast>

    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>

    <detail-bottom-bar @addToCart="addToCart"></detail-bottom-bar>
    
  </div>
</template>

<script>
import DetailNavBar from './detailComps/DetailNavBar.vue'
import DetailSwiper from './detailComps/DetailSwiper.vue'
import DetailBaseInfo from './detailComps/DetailBaseInfo.vue'
import DetailShopInfo from './detailComps/DetailShopInfo.vue'
import DetailGoodsInfo from './detailComps/DetailGoodsInfo.vue'
import DetailParamInfo from './detailComps/DetailParamInfo.vue'
import DetailCommontInfo from './detailComps/DetailCommontInfo.vue'
import DetailBottomBar from './detailComps/DetailBottomBar.vue'
import GoodList from 'components/content/goods/GoodList'

import {getDetails, Goods, Shop, GoodsParam, getRecommend} from 'network/detail'
import { debounce } from "common/utils";
import {itemListenerMixin} from 'common/mixin'

import Scroll from 'components/common/scroll/Scroll.vue'
import BackTop from '../../components/content/backTop/BackTop.vue'
import Toast from '../../components/common/toast/Toast.vue'









export default {
  name: 'Detail',
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommontInfo,
    GoodList,
    DetailBottomBar,
    BackTop,
    Toast
  },
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commontInfo: {},
      recommend: [],
      themeTopY: [],
      getThemeTopY: null,
      currentIndex: 0,
      isShowBackTop: false,
      message: '',
      show: false
    }
  },
  mixins: [itemListenerMixin],
  created() {
    //拿到详细页的iid
    this.iid = this.$route.params.iid

    //拿到该iid的数据
    getDetails(this.iid).then(res => {
      // console.log(res);
      const data = res.data.result

      //拿到详细页中轮播图的数据
      this.topImages = data.itemInfo.topImages

      //拿到详细页中商品信息数据
      this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)

      //拿到商家信息
      this.shop = new Shop(data.shopInfo)

      //获取商品信息
      this.detailInfo = data.detailInfo

      //获取参数信息
      this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)

      //获取评论信息
      if(data.rate.cRate != 0) {
        this.commontInfo = data.rate.list[0]
      }
    })

    //拿到推荐信息
    getRecommend().then(res => {
      this.recommend = res.data.data.list
    })

    //给themeTopY赋值
    this.getThemeTopY = debounce(() => {
      this.themeTopY = []
      this.themeTopY.push(0);
      this.themeTopY.push(this.$refs.param.$el.offsetTop);
      this.themeTopY.push(this.$refs.commont.$el.offsetTop);
      this.themeTopY.push(this.$refs.goods.$el.offsetTop);
      this.themeTopY.push(Number.MAX_VALUE)
      // console.log(this.themeTopY);
    }, 300)

  },
  methods: {
    imageLoad() {
      this.$refs.scroll.refresh()
      this.getThemeTopY()
    },

    titleClick(index) {
      // console.log(index);
      this.$refs.scroll.scrollTo(0, -this.themeTopY[index], 200)
    },

    contentScroll(position) {
      const positionY = -position.y;

      const len = this.themeTopY.length
      
      for(let i = 0; i < len; i++) {
        if(this.currentIndex !== i && (positionY >= this.themeTopY[i] && positionY < this.themeTopY[i+1])) {
          this.currentIndex = i;
          this.$refs.nav.currentIndex = this.currentIndex
        }
      }

      //滚动到某个位置显示返回顶部
      this.isShowBackTop = position.y < -1000;
    },

    backClick() {
      this.$refs.scroll.scrollTo(0, 0, 500);
    },

    addToCart() {
      const product = {}

      product.image = this.topImages[0]
      product.title = this.goods.title
      product.newPrice = this.goods.realPrice
      product.desc = this.goods.desc
      product.iid = this.iid


      this.$store.commit('addCart', product)

      this.message = '加入购物车成功'
      
      this.show = true

      setTimeout(() => {
        this.show = false
      }, 1500)
    }
  }
}
</script>

<style scoped>
#detail {
  position: relative;
  z-index: 20;
  background-color: #fff;
  height: 100vh;
}

.detail-nav {
  position: relative;
  z-index: 21;
  background-color: #fff;
}

.content {
  height: calc(100% - 44px - 49px);
  overflow: hidden;
}
</style>