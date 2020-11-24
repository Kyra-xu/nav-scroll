<template>
    <div class="container">
        <div class="scroll-box">
            <ul>
                <li v-for="(value,index) in dataLists" :key="index" @click="tap($event)">
                    {{value}}
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name: 'nav-scroll',
    data() {
        return {
            // dataLists: ['标签1','标签2','标签3','标签4','标签5','标签6','标签7']
        }
    },
    props:{
        dataLists: {
            type: Array,
            default:[]
        }
    },
    methods: {
        tap (e){
            const last = document.querySelector('.line')
            if(last) {
               last.classList.remove('line')
            }
            e.target.setAttribute('class', 'active line')
            e.target.parentNode.setAttribute('left', e.target.parentNode.getBoundingClientRect().left)
        }
    }
}
</script>
<style scoped>
    .scroll-box {
        width: 100%;
        overflow-x:scroll;
        overflow-y:hidden;

    }
    .scroll-box ul {
        list-style: none;
        display: flex;
        justify-content: start;
        width: fit-content;
        padding: 0px;
        color: #323233;
        font-weight: 500;
    }
    .scroll-box ul li {
        width: fit-content;
        padding: 15px;
        width: 48px;
        min-width: fit-content;
        vertical-align: middle;
        line-height: 40px;
    }
    .scroll-box::-webkit-scrollbar { width: 0 !important }
    .scroll-box { -ms-overflow-style: none; }
    .scroll-box { overflow: -moz-scrollbars-none; }
    .active {
        transform: all .5s;
        position: relative;
    }
    .line::after {
        position: absolute;
        top: 100%;
        right: 25.2%;
        content: '';
        border: 2px solid #ee0a24;
        width: 45%;
    }
</style>