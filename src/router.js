import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import User from "./views/User.vue";
import Admin from "./views/Admin.vue";
import Dashboard from "./views/Dashboard.vue";
import Recipes from "./views/Recipes.vue";
import Rubs from "./views/Rubs.vue";
import Spices from "./views/Spices.vue";
import OrderConfirmation from "./views/OrderConfirmation.vue";
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
      path: "/recipes",
      name: "recipes",
      component: Recipes
    },
    {
      path: "/rubs",
      name: "rubs",
      component: Rubs
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
    },
    {
      path: "/admin",
      name: "admin",
      component: Admin,
      meta: { requiresAuth: true },
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: Dashboard,
      meta: { requiresAuth: true },
    },
    {
      path: "/checkout",
      name: "checkout",
      component: () =>
        import("./views/Checkout.vue")
    },
    {
      path: "/orderConfirmation",
      name: "orderConfirmation",
      component: OrderConfirmation
    },
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