import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import user from './modules/user'
import busines from './modules/busines'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    busines,
    app,
    user
  },
  getters
})

export default store
