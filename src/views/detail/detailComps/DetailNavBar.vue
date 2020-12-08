<template>
  <div class="detail-nav-bar">
    <nav-bar>
      <div slot="left" class="back" @click="backClick">
        <img src="~assets/img/common/back.svg" alt="" />
      </div>
      <div slot="center" class="title">
        <div
          v-for="(item, index) in titles"
          :key="item.index"
          class="item"
          @click="itemClick(index)"
          :class="{active: currentIndex === index}"
        >
          {{item}}
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";

export default {
  name: "DetailNavBar",
  components: {
    NavBar,
  },
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0,
    };
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      this.$emit('titleClick', index)
    },

    backClick() {
      this.$router.back()
    }
  },
};
</script>

<style scoped>
.title {
  display: flex;
}

.item {
  flex: 1;
}

.back {
  position: relative;
  top: 5px;
}

.active {
  color: #ff8198;
}
</style>