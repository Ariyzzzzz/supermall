<template>
  <div v-if="Object.keys(detailInfo).length !== 0" class="goods-info">
    <div class="info-desc clesr-fix">
      <div class="top"></div>
      <div>{{ detailInfo.desc }}</div>
      <div class="bottom"></div>
    </div>
    <div class="info-key">———— {{ detailInfo.detailImage[0].key }} ————</div>
    <div class="info-list">
      <img
        v-for="item in detailInfo.detailImage[0].list"
        :key="item"
        :src="item"
        alt=""
        @load="imageLoad"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailGoodsInfo",
  props: {
    detailInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    imageLoad() {
      this.$emit('imageLoad')
    }
  }
};
</script>

<style scoped>
.top {
  width: 40%;
  border-bottom: 1px solid black;
  margin-bottom: 10px;
}

.bottom {
  float: right;
  width: 40%;
  border-top: 1px solid black;
  margin-top: 10px;
}

.info-desc {
  margin: 20px 0;
}

.info-key {
  margin: 30px auto;
  color: #a6a6a6;
  text-align: center;
}

.info-list img {
  width: 100%;
}
</style>