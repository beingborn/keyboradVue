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

        <!-- 반복문 전 -->
        <!-- tab.content를 변수로 만들어버리는 거지 -->
        <!-- <div class="tab-contents">
            <ul class="product-list">
                <li class="product-item" v-for="(tab.content, index) in tab.content" :key="index">아이템1</li>
                <li class="product-item">아이템2</li>
                <li class="product-item">아이템3</li>
                <li class="product-item">아이템4</li>
            </ul>
        </div> -->


        <div class="tab-content"  v-for="(tab, index)  in tabList" :key="index" :class="[tab.content, {'is-active' : activeTab === index}]"  >
            {{ tab.content }}
            // 탭 내부에는 product-list는 필수 필요
            // product item은 각각의 json 파일을 참조
            // 각각 tabcontent는 유지하되. 서로 각각의 데이터 파일을 가지고 있을려면

            <!-- <ul class="product-list">
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
            </ul> -->
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
        let tabContent = document.querySelectorAll('.tab-content')
        tabContent[0].classList.add("is-active")
    }
}
</script>

<style>
    .tab-list {display: flex; gap: 20px; border-top: 1px solid #ccc; border-bottom: 1px solid #ccc; padding: 12px 0;}
    .tab-list > li {display: flex; flex-direction: column; gap: 4px; align-items: center;}
    .tab-list > li.is-active :where(svg, button) {color: var(--pri)}
    .tab-list > li > button {font-size: 15px;}
    .tab-list > li > svg {width: 20px; height: 20px;}

    .tab-content {display: none;}
    .tab-content.is-active {display: block;}
</style>