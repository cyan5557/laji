import Vue from 'vue'
import App from './App'
import "./static/global.css"
import store from './store' 

import request from './common/request.js'
import api from './api/index.js'
import url from './common/config.js'
import global from "./static/global.js"
// import Clipboard from 'v-clipboard'
// Vue.use(Clipboard)

Vue.config.productionTip = false
Vue.prototype.$request = request
Vue.prototype.$api = api
Vue.prototype.$url = url
Vue.prototype.$global = global

App.mpType = 'app'

const app = new Vue({
    ...App,
	store
})
app.$mount()
