import { createWebHistory, createRouter } from 'vue-router'
import Board from '../components/Board.vue'

const routes = [
  {
    path: '/board',
    component: Board,
  },
  {
    path: '/used',
    component: Board,
  },
  {
    path: '/cart',
    component: Board,
  },
  {
    path: '/community',
    component: Board,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
