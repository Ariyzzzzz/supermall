<template>
  <div class="toast" v-show="show">
    {{message}}
  </div>
</template>

<script>
export default {
  name: 'Toast',
  props: {
    message:{
      type: String,
      default: ''
    },
    show: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
  .toast {
    width: 200px;
    height: 50px;
    background: #ff5555;

    position: fixed;
    left: 0;
    right: 0;
    margin: auto auto;
    top: 0;
    bottom: 0;

    text-align: center;
    color: #fff;
    line-height: 50px;
    border-radius: 10px;
    opacity: 0.8;
  }

</style>