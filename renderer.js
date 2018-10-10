// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
import Vue from 'vue'
import VueRouter from "vue-router"
import App from "./components/App.vue"
import CreateSms from "./components/CreateSms.vue"
import AddNumbers from "./components/AddNumbers.vue"
import WelcomeMssg from "./components/WelcomeMessage.vue"
import Thanks from "./components/Thanks.vue"
import vueBootstrap from "bootstrap-vue"
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(vueBootstrap)
Vue.use(VueRouter)
//create routes 
const routes = [
  {path : "/", component : WelcomeMssg},
  {path : "/createSms", component : CreateSms},
  {path : "/add_numbers", component : AddNumbers},
  {path : "/thanks", component : Thanks}
]

const router = new VueRouter({
  mode: 'history',
  routes
})
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})