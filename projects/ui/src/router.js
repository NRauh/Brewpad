import Vue from 'vue';
import Router from 'vue-router';
import Brews from './views/Brews.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/brews',
      alias: '/',
      name: 'home',
      component: Brews,
    },
    {
      path: '/recipes',
      name: 'recipes',
      component: () => import(/* webpackChunkName: "recipes" */ './views/Recipes.vue'),
    },
  ],
});
