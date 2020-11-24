<template>
  <div class="hello">
    <nav-scroll :dataLists="dataLists"></nav-scroll>
  </div>
</template>

<script>
import Vue from 'vue'
import navScroll from '../../dist/vueScrollNav'
Vue.use(navScroll)
export default {
  name: 'HelloWorld',
  data () {
    return {
      dataLists: ['新闻','娱乐','专家解答','答疑','股票','AERRT','测试E']

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
