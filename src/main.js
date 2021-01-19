import Vue from 'vue'
import App from './App'
import uView from "uview-ui";
import { Checkbox, CheckboxGroup, Stepper } from 'vant'
Vue.use(Checkbox).use(CheckboxGroup).use(Stepper).use(uView)

Vue.prototype.$token = '';
Vue.prototype.$openid = '';

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()
