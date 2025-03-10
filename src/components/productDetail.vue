<template>
    <div class="product-detail">
        {{ id }}
        {{ title }}
    </div>
</template>

<script>
import { useRoute } from 'vue-router';

export default {
    name : 'product detail',
    data(){
        return {
            title : null,
        }
    },

    // Created
    // 컴포넌트 생성 시 + DOM이 렌더링 되기 전 실행됨 (템플릿 접근 X)

    // 1. 초기 데이터 
    // 2. 라우트 데이터
    created() {
        this.title = history.state.title;  
    }

};
</script>

<style>

</style>