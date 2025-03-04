<template>
    <footer id="footer">
        <div class="footer-in inner">
            <router-link class="footer-logo" to="/">
                <img src="../assets/images/logo.svg" alt="로고 이미지" />
            </router-link>
            <p class="copyright">
                Copyright 2025. mhlee All rights reserved. <br>
                본 사이트의 정보와 이미지는 학습을 목적으로 한 가상 에셋들임을 밝힙니다.
            </p>
        </div>        
    </footer>
</template>

<script>
export default {
    name : 'Footer',
}
</script>

<style>
    /* Footer */
    footer {height: 200px; background-color: rgb(48, 55, 64); color: white; display: flex; align-items: center;}
    footer .footer-logo {display: inline-block; width: 140px; margin-bottom: 8px;}
    footer .footer-logo > img {width: 100%;}

    /* Copyright */
    footer .copyright {font-weight: 300;}
</style>