import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () =>
      import(/* webpackChunkName: "home" */ "../views/Home.vue")
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/skills",
    name: "skills",
    component: () =>
      import(/* webpackChunkName: "skills" */ "../views/Skills.vue")
  },
  {
    path: "/work",
    name: "work",
    component: () => import(/* webpackChunkName: "work" */ "../views/Work/Index.vue")
  },
  {
    path: "/work/gohawaiitours",
    name: "gohawaiitours",
    component: () => import(/* webpackChunkName: "gohawaiitours" */ "../views/Work/GoHawaiiTours.vue")
  },
  {
    path: "/contact",
    name: "contact",
    component: () =>
      import(/* webpackChunkName: "contact" */ "../views/Contact.vue")
  }
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if (from.name === null) next();
  else {
    // give the page some time to commit exit animations
    router.app.$emit("route-change");
    window.setTimeout(() => next(), 1000);
  }
});

export default router;
