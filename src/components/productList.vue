<template>
    <ul class="tab-list">
        <li
            role="tab"
            v-for="(tab, index) in tabList"
            :key="index"
            :class="{ 'is-active': activeTab === index }"
            @click="changeTab(index)"
        >
            <button type="button">
                <font-awesome-icon :icon="tab.icon" />
                {{ tab.name }}
            </button>
        </li>
    </ul>
    <div
        class="tab-content"
        v-for="(tab, index) in tabList"
        :key="index"
        :class="{ 'is-active': activeTab === index }"
    >
        <ul class="product-list">
            <li
                class="product-item"
                v-for="(item, index) in tab.content"
                :key="index"
            >
                <div class="product-item-in">
                    <div
                        class="product-thumb"
                        @click="routePushData(tab.name, item, index)"
                    >
                        <img
                            :src="item.image + '&fm=webp'"
                            loading="lazy"
                            v-if="imageLoaded[index]"
                            alt="제품 이미지"
                        />
                        <div v-else class="image-loading">...Loading</div>
                    </div>
                    <div class="product-head">
                        <div class="product-head-top">
                            <p class="product-head-brand">{{ item.brand }}</p>
                            <div class="product-thumb-icon pri">
                                <font-awesome-icon
                                    v-if="item.like"
                                    :icon="['fas', 'heart']"
                                    @click="item.like = !item.like"
                                />
                                <font-awesome-icon
                                    v-else
                                    :icon="['far', 'heart']"
                                    @click="item.like = !item.like"
                                />
                                <font-awesome-icon
                                    :icon="['fas', 'cart-shopping']"
                                />
                            </div>
                        </div>
                        <h2
                            class="product-head-tit"
                            @click="$router.push(`productdetail/${index}`)"
                        >
                            {{ item.title }}
                        </h2>
                        <span class="product-head-price"
                            >{{ item.price }}원</span
                        >
                    </div>
                    <div class="product-body">
                        <p class="product-body-desc">{{ item.desc }}</p>
                    </div>
                </div>
            </li>
        </ul>
        <div class="paging">
            <button type="button" class="prev">
                <font-awesome-icon :icon="['fas', 'chevron-left']" />
                이전
            </button>
            <ul class="paging-list">
                <li class="paging-link is-active">
                    <button type="button">1</button>
                </li>
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
</template>

<script>
import keyboard from '../assets/data/keyboard'
import speaker from '../assets/data/speaker'
import headset from '../assets/data/headset'
import mouse from '../assets/data/mouse'
import accessories from '../assets/data/accessories'

export default {
    name: 'Container',
    data() {
        return {
            tabList: [
                {
                    name: 'keyboard',
                    content: keyboard,
                    icon: ['far', 'keyboard'],
                },
                {
                    name: 'headset',
                    content: headset,
                    icon: ['fas', 'headphones'],
                },
                {
                    name: 'speaker',
                    content: speaker,
                    icon: ['fas', 'volume-high'],
                },
                {
                    name: 'accessories',
                    content: accessories,
                    icon: ['fas', 'plug'],
                },
                {
                    name: 'mouse',
                    content: mouse,
                    icon: ['fas', 'computer-mouse'],
                },
            ],
            activeTab: 0,
            activeTabPosts: [],
            activeTabCurrent: 1, // 현재 위치
            activeTabPages: 10, // 보여줄 갯수
            imageLoaded: [],
            theme: 'lightMode',
        }
    },
    methods: {
        changeTab(index) {
            this.activeTab = index
        },

        // 배열 값을 가져온 후. 해당 값에 src값을 로딩 되었을 때 => onload 배열에 true로 추가
        tabArrayReturn() {
            for (let i = 0; i < this.tabList.length; i++) {
                return this.tabList[i].content
            }
        },
        imgLoad() {
            const tabArray = this.tabArrayReturn()

            // 로드된 UI만 true값으로 배열에 추가
            tabArray.forEach((item, index) => {
                const img = new Image()
                img.src = item.image

                img.onload = () => {
                    this.imageLoaded[index] = true
                }
            })
        },
        // Vue 메서드 내부에서 라우터 사용 시 , this를 붙여줘야함
        routePushData(category, item, index) {
            this.$router.push({
                path: `productdetail/${index}`,
                state: {
                    title: item.title,
                    desc: item.desc,
                    price: item.price,
                    src: item.image,
                    like: item.like,
                    category: category,
                    // 객체나 배열을 넘길 때는 Json.stringify로 문자열 변환이 필요함
                    review: JSON.stringify(item.review),
                },
            })
        },
    },
    mounted() {
        let tab = document.querySelectorAll('.tab-list li')
        tab[0].classList.add('is-active')
        let tabContent = document.querySelectorAll('.tab-content')
        tabContent[0].classList.add('is-active')

        this.imgLoad()

        this.emitter.on('newReview', (data) => {
            // 여기서 전달받은 데이터 확인 후
            this.tabList.forEach((tab) => {
                if (tab.name == data.category) {
                    tab.content.forEach((item) => {
                        if (item.title == data.title) {
                            // 데이터 가공
                            delete data.title
                            delete data.category

                            item.review.unshift(data)
                        }
                    })
                }
            })
        })

        let localTheme = localStorage.getItem('theme')

        if (localTheme) {
            document.documentElement.setAttribute('data-theme', localTheme)
            this.theme = localTheme
        } else {
            document.documentElement.setAttribute('data-theme', localTheme)
            window.localStorage.setItem('theme', this.theme)
        }
    },
}
</script>

<style>
/* Tab */
.tab-list {
    display: flex;
    gap: 20px;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    padding: 12px 0;
}
.tab-list > li.is-active :where(svg, button) {
    color: var(--pri);
}
.tab-list > li > svg {
    width: 20px;
    height: 20px;
}
.tab-list > li > button {
    font-size: 15px;
    display: flex;
    flex-direction: column;
    gap: 4px;
    align-items: center;
}
.tab-content {
    display: none;
    margin-top: 40px;
}
.tab-content.is-active {
    display: block;
}

/* Product */
.product-list {
    display: flex;
    flex-wrap: wrap;
    column-gap: 20px;
    row-gap: 24px;
}
.product-item {
    flex: 1 1 calc((100% - 60px) / 4);
    text-align: left;
    max-width: calc((100% - 60px) / 4);
}
.product-item .product-thumb {
    align-content: center;
    text-align: center;
    border: 1px solid #d8d8d8;
    border-radius: 12px;
    overflow: hidden;
    height: 200px;
}
.product-item:hover .product-thumb > img {
    transition: all 300ms ease-in-out;
}
.product-item:hover .product-thumb > img {
    filter: brightness(70%);
}

/* Product Detail */
.product-head {
    width: 100%;
}
.product-head-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 8px;
    margin-bottom: 8px;
}
.product-head .product-head-tit {
    font-weight: 700;
    font-size: 24px;
    white-space: nowrap;
    overflow: hidden;
    width: 99%;
    text-overflow: ellipsis;
    cursor: pointer;
}
.product-head .product-head-price {
    font-size: 18px;
    font-weight: 500;
    margin: 8px 0;
    display: inline-block;
}
.product-head .product-head-brand {
    font-size: 20px;
    font-weight: 700;
    color: #dfdfdf;
    margin-top: 8px;
    margin-bottom: 4px;
}
.product-body .product-body-desc {
    font-size: 16px;
}

/* Product Thumb */
.product-thumb {
    position: relative;
}
.product-thumb > img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    object-position: 50% 50%;
    cursor: pointer;
}

/* Product Icon */
.product-thumb-icon {
    padding-right: 12px;
}

[class*='-icon'].pri > svg {
    color: var(--pri);
}

.product-thumb-icon > svg {
    width: 20px;
    height: 20px;
    cursor: pointer;
}
.product-thumb-icon > svg + svg {
    margin-left: 8px;
}

/* Paging */
.paging {
    display: flex;
    gap: 12px;
    justify-content: center;
    margin-top: 48px;
}
.paging :is(button) {
    font-size: 20px;
}
.paging-list {
    display: flex;
    gap: 8px;
}
.paging-link > button {
    width: 36px;
    aspect-ratio: 1;
    border-radius: 8px;
}
.paging-link.is-active > button {
    background: var(--pri);
    color: white;
}
</style>
