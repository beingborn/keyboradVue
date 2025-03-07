<template>
    <div class="product-detail">
        {{ title }}
        {{ price }}
        {{ desc }}
    </div>
</template>

<script>
import { useRoute } from 'vue-router';

export default {
    name : 'product detail',

    data() {
        return {
            title: null,
            price: null,
            desc : null
        };
    },

    created() {
        const route = useRoute(); // Vue Router에서 현재 경로 정보 가져오기
        this.title = route.query.title; 
        this.price = route.query.price;
        this.desc = route.query.desc;
    },
    
    mounted() {

    }
};
</script>

<style>

</style>