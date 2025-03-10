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
    name: 'ProductDetail',
    // true로 설정 시 데이터 props로 설정
    props: true,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
