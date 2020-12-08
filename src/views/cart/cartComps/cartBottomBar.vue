<template>
  <div class="bottom-bar">
    <div class="bar-check">
      <check-button 
            class="check-button" 
            :isChecked="isCheckAll"
            @click.native="checkClick"></check-button>
      <span>全选</span>
    </div>

    <div class="price">合计:{{ totalPrice }}</div>

    <div class="calc">去结算({{ totalCount }})</div>
  </div>
</template>

<script>
import CheckButton from "components/content/checkButton/CheckButton.vue";

export default {
  name: "cartBottomBar",
  components: {
    CheckButton,
  },
  computed: {
    totalPrice() {
      return (
        "￥" +
        this.$store.state.cartList
          .filter((item) => {
            return item.isChecked;
          })
          .reduce((preValue, item) => {
            return preValue + item.newPrice * item.count;
          }, 0)
          .toFixed(2)
      );
    },

    totalCount() {
      return this.$store.state.cartList.filter((item) => {
        return item.isChecked;
      }).length;
    },

    isCheckAll() {
      if (this.$store.state.cartList.length === 0) return false;
      return !this.$store.state.cartList.find((item) => !item.isChecked);
    },
  },
  methods: {
    checkClick() {
      if(this.isCheckAll) {//全部选中，如果全部选中就是true
        this.$store.state.cartList.forEach(item => {item.isChecked = false})
      }else {
        this.$store.state.cartList.forEach(item => {item.isChecked = true})
      }
      
    }
  }
};
</script>

<style scoped>
.bottom-bar {
  height: 40px;
  background: #eee;
  position: relative;
  display: flex;
  line-height: 40px;
  font-size: 14px;
}

.bar-check {
  display: flex;
  align-items: center;
  margin-left: 5px;
  width: 60px;
}

.check-button {
  width: 20px;
  height: 20px;
  line-height: 20px;
  margin-right: 5px;
}

.price {
  margin-left: 10px;
  flex: 1;
}

.calc {
  width: 90px;
  background: #ff5777;
  text-align: center;
}
</style>