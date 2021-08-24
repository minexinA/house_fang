import Vue from 'vue'
import Vuex from 'vuex'



Vue.use(Vuex)

import VuexPersistence from 'vuex-persist'

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
  plugins: [vuexLocal.plugin]
})
