import { RouteRecordRaw, createRouter,  createWebHistory } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '@/views/home/Home.vue'),
    alias: ['/home']
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes
});

export default router;
