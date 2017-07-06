// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

// import iView from 'iview'
// import 'iview/dist/styles/iview.css'

// import VueResource from 'vue-resource'

// Vue.use(VueResource)

import axios from 'axios'
//Vue.use(axios)

//Vue.prototype.$http = axios
// import VueAxios from 'vue-axios'
// Vue.use(VueAxios, axios)

// Vue.use(iView)

import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import 'muse-ui/dist/theme-dark.css'
Vue.use(MuseUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
  filters: {
    str2num: function (value) {
      if (!value) return ''
      return Number(value)
    }
  }
})
