<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">supermall购物街</div></nav-bar>

    <tab-control
      :titles="['流行', '新款', '精选']"
      @tabClick="tabClick"
      ref="tabControl1"
      v-show="isTabFixed"
    ></tab-control>

    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      @scroll="contentScroll"
      :pull-up-load="true"
      @pullingUp="loadMore"
    >
      <home-swiper
        v-bind:banners="banners"
        @swiperImageLoad="swiperImageLoad"
      ></home-swiper>
      <home-commend-view :recommends="recommends"></home-commend-view>
      <feature-view></feature-view>
      <tab-control
        :titles="['流行', '新款', '精选']"
        @tabClick="tabClick"
        ref="tabControl2"
      ></tab-control>
      <good-list :goods="goods[currentType].list"></good-list>
    </scroll>

    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import TabControl from "../../components/content/tabContorl/TabControl.vue";
import GoodList from "../../components/content/goods/GoodList.vue";
import BackTop from "../../components/content/backTop/BackTop.vue";
import scroll from "components/common/scroll/Scroll.vue";

import HomeSwiper from "./homeComponents/HomeSwiper";
import FeatureView from "./homeComponents/FeatureView.vue";
import HomeCommendView from "./homeComponents/HomeCommendView";

import { getHomeMultidata, getHomeGoods } from "network/home";
import { debounce } from "common/utils";
import {itemListenerMixin} from 'common/mixin'

export default {
  name: "Home",
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
      isShowBackTop: false,
      tabControlTop: 0,
      isTabFixed: false,
      saveY: 0
    };
  },
  components: {
    NavBar,
    HomeSwiper,
    HomeCommendView,
    FeatureView,
    TabControl,
    GoodList,
    scroll,
    BackTop,
  },
  created() {
    //1.请求轮播图数据
    this.getHomeMultidata();

    //2.请求商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  activated() {
    this.$refs.scroll.scrollTo(0, this.saveY, 0)
    this.$refs.scroll.refresh()
  },
  deactivated() {
    //1.保存Y值
    this.saveY = this.$refs.scroll.getScrollY()
    // console.log(this.saveY);

    //取消事件的监听
    this.$bus.$off('itemImageLoad', () => {
      refresh();
    })
  },
  mixins: [itemListenerMixin],
  mounted() {
    // const refresh = debounce(this.$refs.scroll.refresh, 50);

    // //3.监听item中图片加载完成
    // this.$bus.$on("itemImageLoad", () => {
    //   // this.$refs.scroll.refresh()
    //   refresh();
    // });
  },
  methods: {
    /**
     * 事件监听方法
     */
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      this.$refs.tabControl1.controlIndex = index;
      this.$refs.tabControl2.controlIndex = index;
    },

    backClick() {
      this.$refs.scroll.scrollTo(0, 0, 500);
    },

    contentScroll(position) {
      // console.log(position);
      this.isShowBackTop = position.y < -1000;

      this.isTabFixed = -position.y > this.tabControlTop;
    },

    loadMore() {
      this.getHomeGoods(this.currentType);

      // this.$refs.scroll.refresh()
    },

    //获取tabcontrol的offsettop
    swiperImageLoad() {
      this.tabControlTop = this.$refs.tabControl2.$el.offsetTop;
    },

    /**
     * 网络请求方法
     */
    //获取轮播图的数据
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        // console.log(res);
        this.banners = res.data.data.banner.list;
        this.recommends = res.data.data.recommend.list;
      });
    },

    //获取商品数据
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        this.goods[type].list.push(...res.data.data.list);
        this.goods[type].page += 1;

        this.$refs.scroll.finishPullUp();
      });
    },
  },
};
</script>

<style scoped>
#home {
  padding-top: 44px;
}

.home-nav {
  color: #fff;
  background: #ff8198;
  box-shadow: 0 1px 5px #ff8198;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
}

.content {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
</style>