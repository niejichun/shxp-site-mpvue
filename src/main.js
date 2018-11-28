import Vue from 'vue'
import App from './App'
import store from './store/index'

Vue.config.productionTip = false
Vue.prototype.$store = store

const app = new Vue(App)
app.$mount()
