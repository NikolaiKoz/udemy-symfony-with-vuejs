import Vue from "vue";
import VueRouter from "vue-router";
import App from './App'

Vue.use(VueRouter);

import router from './routers/index';
new Vue ({
    el: '#app',
    router,
    render: h => h(App)
})