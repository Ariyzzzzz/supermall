import Vue from 'vue'
import Vuex from 'vuex'

//安装插件
Vue.use(Vuex)

//创建store对象
const store = new Vuex.Store({
  state: {
    cartList: []
  },
  mutations: {
    addCart(state, payLoad) {
      let oldProduct = null
      for(let item of state.cartList) {
        if(item.iid === payLoad.iid) {
          oldProduct = item
        }
      }

      if(oldProduct) {
        oldProduct.count += 1

      }else {
        payLoad.count = 1
        payLoad.isChecked = false
        payLoad.isClickJoin = true
        state.cartList.push(payLoad)
      }

      
    } 
  },
  getters: {
    cartList(state) {
      return state.cartList
    }
  }
})

//导出
export default store