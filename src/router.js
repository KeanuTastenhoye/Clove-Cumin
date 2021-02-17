import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import User from "./views/User.vue";
import Spices from "./views/Spices.vue";
import Orders from "./views/Orders.vue";
import Profile from "./views/Profile.vue";
import {fb} from './firebase'

Vue.use(Router);

const router =  new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/spices",
      name: "spices",
      component: Spices
    },
    {
      path: "/user",
      name: "user",
      component: User,
      meta: { requiresAuth: true },
      children:[
        {
          path: "profile",
          name: "profile",
          component: Profile
        },
        {
          path: "orders",
          name: "orders",
          component: Orders
        }
      ]
    },
    {
      path: "/checkout",
      name: "checkout",
      component: () =>
        import("./views/Checkout.vue")
    }
  ]
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth);
  const currentUser = fb.auth().currentUser;

  if (requiresAuth && !currentUser) { next('/'); } 
  else if (requiresAuth && currentUser) { next(); } 
  else { next(); }
})

export default router;