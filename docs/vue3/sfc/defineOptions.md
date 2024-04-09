# defineOptions

可以直接在 \<script setup> 中声明组件选项，而不必使用单独的 \<script> 块

```js
<script setup>
    defineOptions({
        inheritAttrs: false,
        customOptions: {
            /* ... */
        }
    })
</script>
```
- 仅支持 Vue 3.3+。
- 这是一个宏定义，选项将会被提升到模块作用域中，无法访问 \<script setup> 中不是字面常数的局部变量。
