import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import Home from './Views/Home.vue'
const router = new VueRouter([
    {
        path: '/',
        component: Home,
        name: 'Home'
    }
]);

export default router;