<template>
  <div id="tabbar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'TabBar',
}
</script>

<style scoped>
  #tabbar{
    padding: 0;
    margin: 0;
    display: flex;
    background-color: #E8E8E8;

   
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;

    box-shadow: 0 -2px 8px #E8E8E8;
  }

</style>