import Vue from 'vue'
import App from './App.vue'
import store from './store'
import Vuetify from 'vuetify'


import SelectElement from './components/SelectElement'


Vue.use(Vuetify);
Vue.component('select-el', SelectElement);

new Vue({
  el: '#app',
  store,
  render: h => h(App)
});
