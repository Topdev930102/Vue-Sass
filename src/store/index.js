import Vue from 'vue'
import Vuex from 'vuex'
import app from './app.js'
import auth from './auth.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    app,
    auth
  }
})
