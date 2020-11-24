import navScroll from './scroll.vue'
let nav = {}
nav.install = function (Vue, options) {
  Vue.prototype.$msg = 'Hello I am test.js'
  Vue.prototype.$myMethod = function (arr) {
    if (arr.length < 0) {
      return false
    } else {
      arr = arr.join('连接你我')
      return arr
    }
  }
  Vue.component(navScroll.name, navScroll) // testPanel.name 组件的name属性
}
export default nav