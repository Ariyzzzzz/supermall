<template>
  <div v-if="Object.keys(commontInfo).length !== 0" class="commont-info">
    <div class="info-header">
      <div class="header-title">用户评价</div>
      <div class="header-more">
        更多
        <div class="jiantou"></div>
      </div>
    </div>
    <div class="info-user">
      <img :src="commontInfo.user.avatar" alt="">
      <span>{{commontInfo.user.uname}}</span>
    </div>
    <div class="info-detail">
      <p>{{commontInfo.content}}</p>
      <div class="info-other">
        <span class="date">{{commontInfo.created | filterDate}}</span>
        <span>{{commontInfo.style}}</span>
      </div>
      <div class="info-imgs">
        <img v-for="(item, index) in commontInfo.images" :key="index" :src="item" >
      </div>
    </div>
  </div>
  
</template>

<script>
import {formatDate} from "common/utils"

export default {
  name: 'DetailCommontInfo',
  props: {
    commontInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  filters: {
    filterDate(value) {
      const date = new Date(value * 1000)
      return formatDate(date, 'yyyy/MM/dd')
    }
  }
}
</script>

<style scoped>
.info-header {
  margin: 10px 0;
  display: flex;
  padding: 10px 5px 0 5px;
  border-top: 5px solid #f6f6;
  line-height: 40px;
  justify-content: space-between;
}

.header-title {
  flex: 1;
}

.header-more {
  flex: 1;
  text-align: right;
}

.info-user {
  display: flex;
  align-items: center;
  margin: 0 0 10px 0;
  border-top: 5px solid #f6f6;
  padding: 10px;
}

.info-user img {
  width: 45px;
  height: 45px;
  border-radius: 75%;
}

.info-user span {
  margin-left: 10px;
  vertical-align: baseline;
}

.info-detail p {
  color: #333;
  margin: 10px 0;
}

.info-other {
  margin: 10px 0;
}

.info-other span {
  color: #444;
  font-size: 14px;
}

.info-other .date {
  margin-right: 10px;
}

.info-imgs img {
  margin-right: 5px;
  width: 100px;
  height: 100px;
}

.jiantou {
  margin-right: 5px;
  display: inline-block;
  width:10px;
  height:10px;
  border-top:2px solid #ff8198;
  border-right:2px solid #ff8198;
  transform: rotate(45deg);
  position: relative;
  bottom: 1px;
}

</style>