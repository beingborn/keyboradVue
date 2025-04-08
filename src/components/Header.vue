<template>
    <header id="header">
        <div class="header-in">
            <div class="header-top inner">
                <ul>
                    <li>
                        <button @click="toggleTheme" type="button">
                            다크모드
                        </button>
                    </li>
                    <li>
                        <button @click="toggleTheme" type="button">
                            라이트
                        </button>
                    </li>
                </ul>
            </div>
            <div class="header-btm inner">
                <h1 class="logo" aria-label="로고">
                    <router-link to="/">
                        <img
                            src="../assets/images/logo.svg"
                            alt="로고 이미지"
                        />
                    </router-link>
                </h1>
                <nav id="gnb" style="display: none">
                    <ul>
                        <li v-for="gnbMenu in gnbMenus" :key="gnbMenu">
                            <router-link :to="gnbMenu.path">
                                {{ gnbMenu.name }}
                            </router-link>
                        </li>
                    </ul>
                </nav>
                <div class="gnb-search">
                    <input type="text" placeholder="검색어를 입력하세요." />
                </div>
                <div class="gnb-util">
                    <button
                        type="button"
                        class="lang-change btn bg-transparent"
                    >
                        <font-awesome-icon :icon="['fas', 'globe']" />
                        한국어
                    </button>
                    <router-link class="btn-md bg-pri" to="/Board"
                        >로그인</router-link
                    >
                </div>
            </div>
        </div>
    </header>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'Header',

    data() {
        return {
            theme: 'lightMode',
        }
    },

    methods: {
        toggleTheme() {
            this.theme = this.theme == 'darkMode' ? 'lightMode' : 'darkMode'
            localStorage.setItem('theme', this.theme)
            document.documentElement.setAttribute('data-theme', this.theme)
        },
    },

    computed: {
        ...mapState(['gnbMenus', 'keyboard']),
    },
}
</script>

<style scoped>
header .logo {
    margin-right: 12px;
}

.header-top {
    margin-top: 20px;
    height: 40px;
    border-bottom: 1px solid #ccc;
}
.header-top > ul {
    display: flex;
    align-items: center;
}
.header-top > ul > li > a {
    line-height: 40px;
}
.header-top > ul > li:first-child {
    padding-right: 8px;
}
.header-top > ul > li:not(:first-child) {
    padding-left: 8px;
    position: relative;
}
.header-top > ul > li:not(:first-child)::before {
    content: '';
    width: 1px;
    height: 12px;
    background: #ccc;
    display: inline-block;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
}

.header-btm {
    height: 64px;
    display: flex;
    align-items: center;
}
.header-btm #gnb > ul {
    display: flex;
    gap: 12px;
    padding-right: 12px;
}
.header-btm .gnb-util {
    margin-left: auto;
    padding-left: 12px;
    display: flex;
    align-items: center;
    gap: 12px;
}
.header-btm .gnb-search {
    flex: 1 1;
}
.header-btm .gnb-search > input {
    height: 40px;
    background-color: #eee;
}
</style>
