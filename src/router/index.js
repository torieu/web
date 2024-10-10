import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    meta: { title: 'kdo je viktorie' },
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/matematika',
    name: 'matematika',
    meta: { title: 'matematika' },
    component: () => import('../views/MatematikaView.vue')
  },
  {
    path: '/KISK',
    name: 'KISK',
    meta: { title: 'KISK' },
    component: () => import('../views/KiskView.vue')
  },
  {
    path: '/proc-KISK',
    name: 'proc-KISK',
    meta: { title: 'proč KISK' },
    component: () => import('../views/Kisk-ProcKisk.vue')
  },
  {
    path: '/prvni-semestr',
    name: 'prvni-semestr',
    meta: { title: 'první semestr' },
    component: () => import('../views/Kisk-PrvniSemestr.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'viktoriino portfolio';
  next();
});

export default router