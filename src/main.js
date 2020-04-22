// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import Element from 'element-ui'
import './assets/lib/element-ui/index.css'
import './assets/lib/icon/iconfont.css'
var _ = require('lodash');

Vue.use(Element)

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
