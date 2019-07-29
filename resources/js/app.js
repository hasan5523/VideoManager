/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

import VueRouter from 'vue-router'
Vue.use(VueRouter)

let routes = [
                {path:'/', name:'youtube-dashboard', component:require('./Youtube/YoutubeDash.vue').default},
                {path:'/video/:id',name:'youtube-video',component:require('./Youtube/VideoDetail.vue').default},
             ]

const router = new VueRouter({
    routes
})
// const files = require.context('./', true, /\.vue$/i);
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('youtube-dashboard', require('./Youtube/YoutubeDash.vue').default);

window.eventBus = new Vue({})

const app = new Vue({
    el: '#app',
    router
});
