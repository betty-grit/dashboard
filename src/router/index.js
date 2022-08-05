import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import LoginView from "../views/LoginView.vue";
import DashboardView from "../views/DashboardView.vue";
import InventoryView from "../views/InventoryView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      noAuth: true,
    },
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/dash",
    name: "dash",
    component: DashboardView,
  },
  {
    path: "/inventory",
    name: "inventory",
    component: InventoryView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
router.beforeEach((to, from) => {
  const token = localStorage.getItem("id");
  let loggedIn = false;
  if (token) {
    // const decoded = jwt_decode(token);
    // const expiryDate = new Date(decoded.exp * 1000);
    // const now = new Date();
    // if (now < expiryDate)
    loggedIn = true;
  }
  if (to.meta.requiresAuth && !loggedIn) {
    return "/";
  }

  // return true or nothing: navigation is valid
  // return false: breaks navigation
  // return route: redirects to that route
});
// router.beforeEach((to, from) => {
//   if (!to.meta.noAuth) {
//     const loggedIn = localStorage.getItem("token");
//     if (!loggedIn) {
//       return "/login";
//     }
//   }
//   return to;
// });

// router.beforeEach((to, from) => {
//   const loggedIn = false;
//   if (!to.meta.noAuth && !loggedIn) {
//     return "/";
//   }
// });
export default router;
