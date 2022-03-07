

require('./bootstrap');
import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './router/routes';
import store from './store/store';


window.Vue = require('vue').default;


Vue.use(VueRouter);


Vue.component('form-update', require('./components/updateForm.vue').default);
Vue.component('form-todolist', require('./components/Form.vue').default);



const app = new Vue({
    el: '#app',
    router: routes,
    store,
});
