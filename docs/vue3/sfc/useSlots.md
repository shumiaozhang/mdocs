# useAttrs()、useSlots()

如果想在js中使用穿透Attributes，可以使用useAttrs()

在 `<script setup>`vue会自动提供slots 和 attrs，因为可以在模板中可以直接通过 $slots 和 $attrs 来访问它们

在`setup`中如果想获取，需要先调用`useSlots()`、`useAttrs()`


```html
<script setup>
    import { useSlots, useAttrs } from 'vue';
    
    const slots = useSlots();
    const attrs = useAttrs();
</script>
```

**注意**

- useAttrs 是真实的运行时函数，它的返回与setupContext.attrs一样

- useSlots 是真实的运行时函数，它的返回与setupContext.slots一样

- 也能在普通的组合式 API 中使用。


