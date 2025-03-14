<template>
    <section>
        <div class="product-detail">
            <div class="product-detail-left">
                <div class="product-detail-thumb">
                    <img
                        :src="src + '&fm=webp'"
                        loading="lazy"
                        alt="제품 이미지"
                    />
                </div>
            </div>
            <div class="product-detail-right">
                <div class="product-detail-icon pri">
                    <font-awesome-icon v-if="like" :icon="['fas', 'heart']" />
                    <font-awesome-icon v-else :icon="['far', 'heart']" />
                    <font-awesome-icon :icon="['fas', 'cart-shopping']" />
                </div>
                <div class="product-detail-head">
                    <h2>{{ title }}</h2>
                    <p>{{ desc }}</p>
                    <div class="product-detail-price">
                        <span>
                            <strong>{{ price }}</strong
                            >원
                        </span>
                    </div>
                </div>
                <div class="product-detail-body">
                    <button class="btn-lg bg-pri" type="button">
                        구매하기
                    </button>
                    <button class="btn-lg bg-gray" type="button">후기</button>
                </div>
            </div>
        </div>
        <div class="product-comment">
            <div class="section-header">
                <h2 class="section-header-tit">후기</h2>
                <span id="review">
                    <strong>{{ review.length }}</strong
                    >개
                </span>
            </div>
            <div class="review-write">
                <div class="review-write-in">
                    <div class="review-write-header">
                        <h2 class="review-write-tit">리뷰 작성</h2>
                        <p>
                            <span>{{ title }}</span
                            >는 어떠셨나요?
                        </p>
                        <div class="review-write-rating">
                            <font-awesome-icon
                                v-for="a in 5"
                                :key="a"
                                :icon="['fas', 'star']"
                            />
                        </div>
                        <div class="review-write-textarea">
                            <textarea
                                placeholder="다른 고객님에게 도움이 되도록 상품에 대한 50자 이내로 솔직한 평가를 남겨주세요."
                                rows="5"
                                @input="counter"
                            ></textarea>
                            <p id="text-limit">
                                <span id="text-limit-current">{{
                                    reviewCurrent
                                }}</span>
                                /
                                <span id="text-limit-max">{{
                                    reviewLimit
                                }}</span>
                            </p>
                        </div>
                        <div class="review-write-function">
                            <button class="btn-lg bg-pri" type="button">
                                완료
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="product-review">
                <ul>
                    <li v-for="(item, index) in review" :key="index">
                        <div class="product-review-in">
                            <div class="user-profile-thumb thumb-60"></div>
                            <div class="product-review-detail">
                                <p class="product-review-user">
                                    {{ item.username }}
                                </p>
                                <div class="product-review-rating">
                                    <font-awesome-icon
                                        v-for="a in item.rating"
                                        :key="a"
                                        :icon="['fas', 'star']"
                                    />
                                </div>
                                <p class="product-review-desc">
                                    {{ item.content }}
                                </p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script>
import { useRoute } from 'vue-router'

export default {
    name: 'product detail',
    data() {
        return {
            title: null,
            reviewCurrent: 0,
            reviewLimit: 50,
        }
    },

    methods: {
        counter(event) {
            const str = event.target.value.length

            if (str > this.reviewLimit) {
                event.target.value = event.target.value.substring(
                    0,
                    this.reviewLimit
                )
                event.target.focus()
                alert('입력 글자를 초과하셨습니다.')
            } else {
                this.reviewCurrent = str
            }
        },
    },

    // Created
    // 컴포넌트 생성 시 + DOM이 렌더링 되기 전 실행됨 (템플릿 접근 X)

    // 1. 초기 데이터
    // 2. 라우트 데이터
    created() {
        this.title = history.state.title
        this.desc = history.state.desc
        this.price = history.state.price
        this.src = history.state.src
        this.like = history.state.like
        this.review = JSON.parse(history.state.review)
    },
}
</script>

<style>
/* Product Detail Left */
.product-detail {
    display: flex;
    padding-top: 40px;
    align-items: center;
    padding-bottom: 40px;
    border-bottom: 1px solid #ccc;
}
.product-detail-left {
    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: 50%;
    padding-right: 40px;
}
.product-detail-thumb {
    width: 100%;
    height: auto;
    border-radius: 4px;
    overflow: hidden;
}
.product-detail-thumb > img {
    width: 100%;
    object-fit: cover;
}

/* Product Detail Right */
.product-detail-right {
    flex-grow: 1;
}
.product-detail-icon > svg {
    width: 28px;
    height: 28px;
}
.product-detail-icon > svg + svg {
    margin-left: 12px;
}

/* Product Detail Head */
.product-detail-head {
    margin-top: 12px;
}
.product-detail-head > h2 {
    font-size: 28px;
}
.product-detail-head > p {
    font-size: 20px;
    margin-top: 8px;
}
.product-detail-head .product-detail-price > span {
    font-size: 28px;
}

/* Product Detail Body */
.product-detail-body > button {
    margin-top: 32px;
    width: 180px;
}
.product-detail-body > button + button {
    margin-left: 8px;
}

/* Product Section Header */
.section-header {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-top: 20px;
    margin-bottom: 20px;
}
.section-header > .section-header-tit {
    font-size: 32px;
    font-weight: 700;
}

.section-header #review {
    font-size: 18px;
}
/* Product Review */
.review-write {
    background-color: #f8f8f8;
    padding: 20px;
    border-radius: 8px;
}
.review-write-header .review-write-tit {
    font-weight: 700;
}

.review-write-textarea {
    position: relative;
}
.review-write-textarea #text-limit {
    position: absolute;
    right: 20px;
    bottom: 20px;
}
.review-write-textarea > textarea {
    height: 200px;
    margin-top: 12px;
}
.review-write-function {
    margin-top: 10px;
}

/* Product Review */
.product-review {
    margin-top: 40px;
    max-height: 300px;
    overflow-y: auto;
}
.product-review-in {
    display: flex;
    gap: 8px;
    align-items: start;
}
.product-review > ul > li {
    padding: 12px;
    border-radius: 8px;
    border: 1px solid #ccc;
}
.product-review > ul > li + li {
    margin-top: 16px;
}
.product-review-user {
    font-weight: 700;
    font-size: 18px;
}
.product-review-desc {
    color: #333;
}
.product-review-rating > svg {
    color: var(--pri);
}
.product-review-detail {
    display: flex;
    flex-direction: column;
    gap: 8px;
}
</style>
