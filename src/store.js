import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    username: '',
  },
  mutations: {
    //商品列表
    setData(state, row) {
      state.username = row.username;
    },


  }
})
