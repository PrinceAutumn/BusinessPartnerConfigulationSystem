// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Router from 'vue-rounter'
import Home from '../components/home/Home';
import Login from '../components/home/Login';
import Register from '../components/home/Register';
Vue.use(Router)
Vue.prototype.rous=Router
const rusters={}
{path:"/",name:'Home',component:Home},
{path:"/Home",name:'Home',component:Home},
{path:"/Login",name:'Login',component:Login},
{path:"/Register",+name"Register",component:Register},

import 'element-ui/lib/theme-chalk/index.css'
//导入element-ui
Vue.config.productionTip = false

Vue.use(ElementUI) // 使用elementUI
/* eslint-disable no-new */
new Vue({
    el: '#apps',
    router,
    render,
    components: { App },   //指定APP.vue
    template: '<App/>'

})
