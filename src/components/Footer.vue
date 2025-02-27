<template>
    <footer id="footer">
        <div class="footer-in inner">
            <router-link class="footer-logo" to="/">
                <img src="../assets/images/logo.svg" alt="로고 이미지" />
            </router-link>
            <p class="copyright">
                Copyright 2025. mhlee All rights reserved.
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
    footer {height: 200px; background-color: rgb(48, 55, 64); color: white; display: flex; align-items: center;}
    footer .footer-logo {display: inline-block; width: 140px; margin-bottom: 8px;}
    footer .footer-logo > img {width: 100%;}

    footer .copyright {font-weight: 300;}
</style>