<template>
  <div class="tab-control">
    <div  v-for="(item, index) in titles" class="tab-control-item" 
    :class="{active: index === controlIndex}" :key="index" @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabControl',
  props: {
    titles: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      controlIndex: 0
    }
  },
  methods: {
    itemClick(index) {
      this.controlIndex = index;
      this.$emit('tabClick', index)
    }
  }
}
</script>

<style scoped>
.tab-control {
  display: flex;
  text-align: center;
  height: 44px;
  line-height: 44px;
  background-color: #fff;
  z-index: 8;

  position: sticky;
  top: 44px;
}

.tab-control-item {
  flex: 1;
}

.active {
  color: #ff8198;
}

.active span {
  border-bottom: 2px solid #ff8198;
  
}

.tab-control-item span {
  padding: 11.5px;
}


</style>