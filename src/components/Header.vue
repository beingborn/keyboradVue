<template>
  <header>
    <div class="header-in">
      <div class="header-top inner">
        <ul>
          <li><router-link to="/Board">다크</router-link></li>
          <li><router-link to="/Board">라이트</router-link></li>
        </ul>
      </div>
      <div class="header-btm inner">
        <h1 class="logo" aria-label="로고">
          <router-link to="/">
            <img src="../assets/images/logo.svg" alt="로고 이미지" />
          </router-link>
        </h1>
        <nav id="gnb">
          <ul>
            <li v-for="gnbMenu in gnbMenus" :key="gnbMenu">
              <router-link :to="gnbMenu.path">
                {{ gnbMenu.name }}
              </router-link>
            </li>
          </ul>
        </nav>
        <input type="text" placeholder="검색어를 입력하세요." />
        <div>
          <button type="button">한국어</button>
        </div>
        <router-link to="/Board">로그인</router-link>
      </div>
    </div>
  </header>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Header',

  computed: {
    ...mapState(['gnbMenus']),
  },
}
</script>

<style></style>
