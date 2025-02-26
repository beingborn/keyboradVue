import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      gnbMenus: [
        { name: '중고거래', path: '/used' },
        { name: '장바구니', path: '/cart' },
        { name: '커뮤니티', path: '/community' },
      ],
    }
  },
})

export default store
