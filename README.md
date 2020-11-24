# nav-scroll

> A Vue.js project for nav-scroll

## Installing

Using npm:

```js
 $npm install simple-nav-scroll

```
## Example

>main.js

```js
    import Vue from 'vue'
    import nav from 'simple-nav-scroll'
    Vue.use(nav)
```
>component
```html
    <template>
        <nav-scroll :dataLists="dataLists"></nav-scroll>
    </template>
```
```js
    <script>
        export default {
        data () {
            return {
                dataLists: ['标签1','标签2','标签3','标签4','标签5','标签6']
            }
        }
        }
    </script>
```



