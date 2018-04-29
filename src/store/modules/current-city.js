
// initial state
const state = {
  city: {}
}

// getters
const getters = {
  getCurrCity: state => state.city
}

// mutations
const mutations = {
  setCurrCity(state, data) {
    state.city= data;
  },
  clearCurrCity(state) {
    state.city = {};
  }
}

export default {
  state,
  getters,
  mutations
}
