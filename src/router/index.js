import { createWebHistory, createRouter } from 'vue-router'
import productDetail from '../components/productDetail.vue'
import ProductList from '../components/productList.vue'

const routes = [
  {
    path: '/',
    component: ProductList,
  },
  {
    path: '/productdetail/:id',
    component: productDetail,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
