import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '../views/homepage/homepage.vue'
import AboutUs from '../views/aboutus/aboutus.vue'

Vue.use(Router);

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      component: Homepage
    },
    {
        path: '/about-us',
        component: AboutUs
    }
  ]
})
