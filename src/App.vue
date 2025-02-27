<template>
  <Header></Header>
  <Container></Container>
  <Footer></Footer>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Container from './components/Container.vue'

export default {
  name: 'App',
  components: {
    Header, Footer, Container
  },

  mounted(){
    const headerHeight = document.getElementById('header').offsetHeight;
    const footerHeight = document.getElementById('footer').offsetHeight;
    const container = document.getElementById('container')

    // 푸터 하단 고정 스타일링
    container.style.minHeight = `calc(100vh - (${headerHeight + footerHeight }px))`
  }
}
</script>

<style>
  
</style>
