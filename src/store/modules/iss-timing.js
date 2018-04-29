import externalApi from '../../gateways/external-api';

// initial state
const state = {
  timings: []
};

// getters
const getters = {
  getTimings: state => state.timings
};

// actions
const actions = {
  requestTimingByCount({commit}, payload) {
    externalApi.getIssTimingByCount(payload.latitude, payload.longitude, payload.passesTimes).then((response) => {
      commit('setResponseToTimings', response.data.response);
    }).catch(error => {
      console.log(error);
    });
  }
};

// mutations
const mutations = {
  setResponseToTimings(state, data) {
    state.timings = data;
  },
  clearTimings(state) {
    state.timings = [];
  }
};

export default {
  state,
  getters,
  actions,
  mutations
}
