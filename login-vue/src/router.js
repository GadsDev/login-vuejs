import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Login from './views/Login.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/c',
      name: 'login',
      component: Login,
    },
    {
      path: '/cadastro',
      name: 'cadastro',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Cadastro.vue'),
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
    },
  ],
});
