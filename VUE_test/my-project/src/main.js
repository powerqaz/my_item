import Vue from 'vue'
import app from './app'
import router from './router'
import 'lib-flexible'

new Vue({
  el: '#app',
  render: h => h(app),
router,
})
