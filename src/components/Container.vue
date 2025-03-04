<template>
    <main id="container" class="inner">
        <ul class="tab-list">
            <li role="tab"
                v-for="(tab, index) in tabList"
                :key="index"
                :class="{'is-active' : activeTab === index}"
                @click="changeTab(index)"
                >
                <font-awesome-icon :icon="tab.icon" />
                <button type="button" >{{ tab.name }}</button>
            </li>
        </ul>
        <div class="tab-content" v-for="(tab, index) in tabList" :key="index" :class="{'is-active' : activeTab === index}">
            <ul class="product-list">
                <li class="product-item" v-for="(item, i) in tab.content" :key="i">
                    <router-link to="/Board">
                        <div class="product-thumb">
                            <img src="https://img.danawa.com/prod_img/500000/570/903/img/71903570_1.jpg?shrink=130:130&_v=20241202131646" alt="제품 이미지">
                            <div class="product-thumb-icon">
                                <font-awesome-icon :icon="['far', 'heart']" />
                                <font-awesome-icon :icon="['fas', 'cart-shopping']" />
                            </div>
                        </div>
                        <div class="product-head">
                            <p class="product-head-brand">{{ item.brand }}</p>
                            <h2 class="product-head-tit">{{ item.title }}</h2>
                            <span class="product-head-price">{{ item.price}}원</span>
                        </div>
                        <div class="product-body">
                            <p class="product-body-desc">{{item.desc}}</p>
                        </div>
                    </router-link>
                </li>
            </ul>
            <div class="paging">
                <button type="button" class="prev">
                    <font-awesome-icon :icon="['fas', 'chevron-left']" />
                    이전
                </button>
                <ul class="paging-list">
                    <li class="paging-link is-active"><button type="button">1</button></li>
                    <li class="paging-link"><button type="button">2</button></li>
                    <li class="paging-link"><button type="button">3</button></li>
                    <li class="paging-link"><button type="button">4</button></li>
                </ul>
                <button type="button" class="next">
                    다음
                    <font-awesome-icon :icon="['fas', 'chevron-right']" />
                </button>
            </div>
        </div>
    </main>
</template>

<script>
import keyboard from '../assets/data/keyboard'
import keycap from '../assets/data/keycap'
import switchList from '../assets/data/switchList'
import mouse from '../assets/data/mouse'
import accessories from '../assets/data/accessories'

export default {
    name : 'Container',
    data(){
        return {
            tabList : [
                {name: '키보드', content : keyboard, icon: ['far', 'keyboard']},
                {name: '스위치', content: switchList, icon:  ['fas', 'bolt']},
                {name: '키캡', content: keycap, icon:  ['fas', 'hockey-puck']},
                {name: '액세서리', content: accessories, icon:  ['fas', 'plug']},
                {name: '마우스', content: mouse, icon:  ['fas', 'computer-mouse']},
            ],
            activeTab : 0,
            keyboard : keyboard,
            keycap : keycap
        }
    },
    methods : {
        changeTab(index){
            this.activeTab = index;
        }
    },
    mounted(){
        let tab = document.querySelectorAll('.tab-list li')
        tab[0].classList.add('is-active')
        let tabContent = document.querySelectorAll('.tab-content')
        tabContent[0].classList.add("is-active")
    }
}
</script>

<style>
    /* Tab  */
    .tab-list {display: flex; gap: 20px; border-top: 1px solid #ccc; border-bottom: 1px solid #ccc; padding: 12px 0;}
    .tab-list > li {display: flex; flex-direction: column; gap: 4px; align-items: center;}
    .tab-list > li.is-active :where(svg, button) {color: var(--pri)}
    .tab-list > li > button {font-size: 15px;}
    .tab-list > li > svg {width: 20px; height: 20px;}
    .tab-content {display: none; margin-top: 40px;}
    .tab-content.is-active {display: block;}

    /* Product */
    .product-list {display: flex; flex-wrap: wrap; column-gap: 20px; row-gap: 24px;}
    .product-item {flex: 1 1 calc((100% - 60px) / 4); text-align: left; max-width: calc((100% - 60px) / 4);}
    .product-item .product-thumb {align-content: center; text-align: center; border: 1px solid #d8d8d8; border-radius: 12px; overflow: hidden; height: 200px;}

    /* Product Thumb */
    .product-thumb {position: relative;}
    .product-thumb .product-thumb-icon {position: absolute; right: 20px; top: 20px;}
    .product-thumb .product-thumb-icon > svg {width: 28px; height: 28px; color: #ccc;}
    .product-thumb .product-thumb-icon > svg {margin-left: 8px;}

    /* Product Detail */
    .product-head {width: 100%;}
    .product-head .product-head-tit {font-weight: 700; font-size: 24px; white-space: nowrap; overflow: hidden; width: 99%; text-overflow: ellipsis; } 
    .product-head .product-head-price {font-size: 18px; font-weight: 500; margin: 8px 0; display: inline-block;}
    .product-head .product-head-brand {font-size: 20px; font-weight: 700; color: #dfdfdf; margin-top: 8px; margin-bottom: 4px; }
    .product-body .product-body-desc {font-size: 16px;}

    /* Paging */
    .paging {display: flex; gap: 12px; justify-content: center; margin-top: 48px;}
    .paging :is(button) {font-size: 20px;}
    .paging-list {display: flex; gap: 8px;}
    .paging-link > button {width: 36px; aspect-ratio: 1; border-radius: 8px;}
    .paging-link.is-active > button {background: var(--pri); color: white;}
</style>