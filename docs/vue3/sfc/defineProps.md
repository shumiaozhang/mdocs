
# defineProps() 、defineEmits()


是\<script setup> 的语法糖，不用导入可以直接用，defineProps() 和 defineEmits() 是两个用于声明组件属性和事件的辅助函数。这两个函数为组件提供了更简洁、更直接的声明方式，而无需使用传统的 props 和 emits 选项。


## defineProps()

用于声明组件接收的属性（props）。它接受一个对象作为参数，该对象的键是属性的名称，值是属性的类型或校验函数


## defineEmits()

用于声明组件可以触发的事件。它接受一个数组或对象作为参数，数组中的字符串是事件名，对象则允许你为事件提供校验函数


```js
<script setup>
const props = defineProps({
  foo: String
})

const emit = defineEmits(['change', 'delete'])
// setup 代码
</script>
```

- defineProps 和 defineEmits 都是只能在 \<script setup> 中使用的编译器宏。他们不需要导入，且会随着 \<script setup> 的处理过程一同被编译掉。

- defineProps 接收与 props 选项相同的值，defineEmits 接收与 emits 选项相同的值。

- defineProps 和 defineEmits 在选项传入后，会提供恰当的类型推导。

- 传入到 defineProps 和 defineEmits 的选项会从 setup 中提升到模块的作用域。因此，**传入的选项不能引用在 setup 作用域中声明的局部变量**。这样做会引起编译错误。但是，可以引用导入的绑定，因为它们也在模块作用域内。


**注意**

- 当使用 defineProps 或 defineEmits 时，传入给它们的选项（即属性和事件的声明）会**被“提升”到整个模块的作用域**。这意味着这些选项不仅可以在 \<script setup> 的其余部分中使用，也可以在模板中使用，因为它们成为了模块的顶层变量。

- 由于这些选项被提升到了模块作用域，不能引用仅在 setup 函数作用域内声明的局部变量。局部变量只存在于 setup 函数的作用域内，而 defineProps 和 defineEmits 定义的属性和事件是在整个模块作用域内可见的。因此，**如果defineProps 或 defineEmits 中尝试引用一个 setup 内的局部变量，编译器会报错，因为找不到这个局部变量。**

- 可以在 defineProps 和 defineEmits 中引用导入的绑定（即在其他文件中定义的变量或函数，通过 import 语句导入到当前文件中）。这些导入的绑定也是在模块作用域内声明的，因此它们可以与 defineProps 和 defineEmits 中的选项一起使用。