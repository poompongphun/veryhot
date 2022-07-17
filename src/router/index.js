import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/webtopia',
    name: 'webtopia',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/WebtopiaView.vue')
  },
  {
    path: '/DATAVERGENT',
    name: 'datavergent',
    component: () => import('../views/DatavergentView.vue')
  },
  {
    path: '/NETAPUNK',
    name: 'netapunk',
    component: () => import('../views/NetapunkView.vue')
  },
  {
    path: '/GAMERUNNER',
    name: 'gamerunner',
    component: () => import('../views/GamerunnerView.vue')
  },
  {
    path: '/webtopia/camp092',
    name: 'camp092',
    component: () => import('../views/W_092.vue')
  },
  {
    path: '/TEXT',
    name: 'text',
    component: () => import('../views/TextView.vue')
  },
  {
    path: '/TEST',
    name: 'test',
    component: () => import('../components/UsersList.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
