import Vue from 'vue'
import Router from 'vue-router'
import Blog from './components/Blog'
import 'bootstrap/dist/css/bootstrap.css' // add
import 'bootstrap-vue/dist/bootstrap-vue.css' // add
import Singup from "./components/Signup.vue";
import Singin from "./components/Signin.vue";
import Singout from "./components/Signout.vue";
import Top from "./components/Top.vue";

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'blog',
      component: Blog
    },
    {
        path: "/signup",
        name: "signup",
        component: Singup
      },
    {
        path: "/signin",
        name: "signin",
        component: Singin
      },
    {
        path: "/signout",
        name: "signout",
        component: Singout
      },
    {
        path: "/top",
        name: "top",
        component: Top
      },
  ]
})