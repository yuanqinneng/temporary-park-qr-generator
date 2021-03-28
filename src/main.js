import Vue from 'vue'
import App from './App.vue'
import router from './router'
import common from '../utils/common'
import { Button, Form, Input, Icon, message } from 'ant-design-vue';
import 'amfe-flexible/index.js'

[Button, Form, Input, Icon, message]
.forEach((component)=> { Vue.use(component) })

Vue.config.productionTip = false
Vue.prototype.common = common
Vue.prototype.$message = message;

Vue.directive('title', {
  inserted: function (el) {
    document.title = el.dataset.title
  }
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
