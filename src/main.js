// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import VeeValidate from 'vee-validate'
import Vuetify from 'vuetify'
import FullCalendar from 'vue-full-calendar'
import 'fullcalendar/dist/fullcalendar.min.css'

Vue.config.productionTip = false

Vue.use(VeeValidate)
Vue.use(Vuetify)
Vue.use(FullCalendar)

const moment = require('moment')
require('moment/locale/es')
 
Vue.use(require('vue-moment'), {
    moment
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
