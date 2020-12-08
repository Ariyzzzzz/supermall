<template>
  <div class="param-info" v-if="Object.keys(paramInfo).length !== 0">
    <table class="info-size" v-for="(table, index) in paramInfo.sizes" :key="index">
      <tr v-for="(tr, indey) in table" :key="indey">
        <td v-for="(td, indez) in tr" :key="indez">{{td}}</td>
      </tr>
    </table>
    <table class="info-param">
      <tr v-for="(info, index) in paramInfo.infos" :key="index">
        <td class="info-param-key">{{info.key}}</td>
        <td class="info-param-value">{{info.value}}</td>
      </tr>
    </table>
    <div class="info-img" v-for="item in paramInfo.images" :key="item">
      <img :src="item" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailParamInfo',
  props: {
    paramInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style scoped>

.info-size {
  width: 100%;
  margin: 10px 0 0 0;
  padding: 10px 0;
  border-top: 5px solid #f6f6;
}

.info-size td {
  border-bottom: 3px solid #f2f5f8;
  line-height: 40px;
}

.info-param {
  width: 100%;
  margin: 10px 0 0 0;
  padding: 10px 0;
  border-top: 5px solid #f6f6;
  
}

.info-param-key {
  border-bottom: 3px solid #f2f5f8;
  width: 25%;
}

.info-param-value {
  color: #ff5777;
  line-height: 40px;
  border-bottom: 3px solid #f2f5f8
}

.info-img  img{
  width: 100%;
}
</style>