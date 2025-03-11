<template>
    <div class="product-detail">
        <div class="product-detail-left">
            <div class="product-detail-thumb">
                <img :src="src + '&fm=webp'" loading="lazy" alt="제품 이미지">
            </div>
        </div>
        <div class="product-detail-right">
            <div class="product-detail-icon pri">
                <font-awesome-icon v-if="like" :icon="['fas', 'heart']"/>
                <font-awesome-icon v-else :icon="['far', 'heart']"/>
                <font-awesome-icon :icon="['fas', 'cart-shopping']" />
            </div>
            <div class="product-detail-head">
                <h2>{{ title }}</h2>
                <p>{{ desc }}</p>
                <div class="product-detail-price">
                    <span>
                        <strong>{{ price }}</strong>원
                    </span>    
                </div>
            </div>
            <div class="product-detail-body">
                <button class="btn-lg bg-pri" type="button">구매하기</button>
                <button class="btn-lg bg-gray" type="button">후기</button>
            </div>
        </div>
    </div>
    <div class="product-comment">
        <div class="section-header">
            <h2 class="section-header-tit">후기</h2>
            <span>
                <strong>135</strong>개
            </span>
        </div>
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
        this.desc  = history.state.desc;
        this.price = history.state.price;
        this.src  = history.state.src;
        this.like  = history.state.like;
    }
};
</script>

<style>
    /* Product Detail Left */
    .product-detail { display: flex; padding-top: 40px; align-items: center; padding-bottom: 40px; border-bottom: 1px solid #CCC;}
    .product-detail-left { flex-grow: 0; flex-shrink: 0; flex-basis: 50%; padding-right: 40px;}
    .product-detail-thumb { width: 100%; height: auto; border-radius: 4px; overflow: hidden;}
    .product-detail-thumb > img { width: 100%; object-fit: cover; }

    /* Product Detail Right */
    .product-detail-right { flex-grow: 1; }
    .product-detail-icon > svg { width: 28px; height: 28px;}
    .product-detail-icon > svg + svg { margin-left: 12px; }

    /* Product Detail Head */
    .product-detail-head {margin-top: 12px;}
    .product-detail-head > h2 {font-size: 28px;}
    .product-detail-head > p {font-size: 20px; margin-top: 8px;}
    .product-detail-head .product-detail-price > span {font-size: 28px;}

    /* Product Detail Body */
    .product-detail-body > button {margin-top: 32px; width: 180px;}
    .product-detail-body > button + button {margin-left: 8px;}
</style>