import Vue from 'vue'
import App from './App'
import uView from "uview-ui";
import http from './common/common.js'
import { Checkbox, CheckboxGroup, Stepper } from 'vant'
Vue.use(Checkbox).use(CheckboxGroup).use(Stepper).use(uView)

Vue.config.productionTip = false
Vue.prototype.$http = http

App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()
