import Vue from 'vue'
import App from './App'
import request from './common/request.js'
import api from './api/index.js'
import url from './common/config.js'
import uView from "uview-ui";
import { Checkbox, CheckboxGroup, Stepper } from 'vant'
Vue.use(Checkbox).use(CheckboxGroup).use(Stepper).use(uView)

Vue.config.productionTip = false
Vue.prototype.$request = request
Vue.prototype.$api = api
Vue.prototype.$url = url

App.mpType = 'app'

const app = new Vue({
  ...App,
  store
})
app.$mount()
