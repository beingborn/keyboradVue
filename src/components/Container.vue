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

        <div class="tab-content" v-if="activeTab == 0">
            <ul class="product-list">
                <li class="product-item">
                    <div class="product-thumb">
                        <img src="https://img.danawa.com/prod_img/500000/570/903/img/71903570_1.jpg?shrink=130:130&_v=20241202131646" alt="제품 이미지">
                    </div>
                    <div class="product-head">
                        <h2 class="product-head-tit"></h2>
                        <span>82,000원</span>
                    </div>
                    <div class="product-body">
                        <p class="product-body-desc">Teamwolf Raven 68 HE</p>
                        <div class="hash-tag">
                            <span>#마그네틱</span>
                            <span>#게이밍키보드</span>
                            <span>#게이밍키</span>
                        </div>
                    </div>
                </li>
            </ul>
        </div>

    </main>
</template>

<script>
export default {
    name : 'Container',
    data(){
        return {
            tabList : [
                {name: '키보드', content: 'keyboard', icon: ['far', 'keyboard']},
                {name: '스위치', content: 'switch', icon:  ['fas', 'bolt']},
                {name: '키캡', content: 'keycap', icon:  ['fas', 'hockey-puck']},
                {name: '액세서리', content: 'accessories', icon:  ['fas', 'plug']},
                {name: '마우스', content: 'mouse', icon:  ['fas', 'computer-mouse']},
            ],
            activeTab : 0,
            productList : []
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
    }
}
</script>

<style>
    .tab-list {display: flex; gap: 20px; border-top: 1px solid #ccc; border-bottom: 1px solid #ccc; padding: 12px 0;}
    .tab-list > li {display: flex; flex-direction: column; gap: 4px; align-items: center;}
    .tab-list > li.is-active :where(svg, button) {color: var(--pri)}
    .tab-list > li > button {font-size: 15px;}
    .tab-list > li > svg {width: 20px; height: 20px;}
</style>