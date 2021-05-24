import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import router from "./router";
// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

import VueParticles from 'vue-particles'
Vue.use(VueParticles)
import Antd from 'ant-design-vue';

import 'ant-design-vue/dist/antd.css';

import VueParticlesBg from "particles-bg-vue";
 
Vue.use(VueParticlesBg);
Vue.use(Antd)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
