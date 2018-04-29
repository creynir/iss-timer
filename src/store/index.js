import Vue from 'vue'
import Vuex from 'vuex'
import issTimings from './modules/iss-timing'
import currentCity from './modules/current-city'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    issTimings,
    currentCity
  }
})
