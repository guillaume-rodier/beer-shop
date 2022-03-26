import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "BeerList",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "BeerList" */ "@/views/BeerListView"),
  },
  {
    path: "/beer-detail/:beerId",
    name: "BeerDetail",
    props: true,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "BeerDetail" */ "@/views/BeerDetailView.vue"),
  },
  {
    path: "/beer-cart",
    name: "BeerCart",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "BeerCart" */ "@/views/BeerCartView"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
