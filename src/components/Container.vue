<template>
    <main id="container" class="inner">
        <ul class="tab-list">
            <li v-for="(tab, index) in tabList" :key="index">
                <!-- 아이콘 삽입 필요 -->
                <button type="button">{{ tab.name }}</button>
            </li>
        </ul>
        <div class="tab-content">

        </div>
    </main>
</template>

<script>
export default {
    name : 'Container',
    data(){
        // 탭과 연결된 탭 내용을 배열 내 객체로 만들고
        // 클릭 시 해당 탭을 활성화한다.
        // 번호로 할 시 혹시나 위치값이 변경되면 안되기 때문에
    
        return {
            tabList : [
                {name: '키보드', content: 'keyboard', icon: ''},
                {name: '스위치', content: 'switch', icon: ''},
                {name: '키캡', content: 'keycap', icon: ''},
                {name: '액세서리', content: 'accessories', icon: ''},
                {name: '마우스', content: 'mouse', icon: ''},
            ]
        }
    }
}
</script>

<style>
    .tab-list {display: flex;}
    .tab-list > li > button {font-size: 15px;}
</style>