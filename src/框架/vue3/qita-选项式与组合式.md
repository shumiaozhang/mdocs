
## 选项式API

优点：容易学习和编写，写在特定的位置。

缺点：代码组织差，一个功能会分散开。

Vue2、Vue3支持选项式API

写在特定的位置就是比如声明的数据写在`data`中，方法写在`method`中，监听写在`watch`中等等，这样一个功能实现会分散开。如下图：

<img src="https://static-4d30057b-f677-41d0-ae58-b333da00d9aa.bspapp.com/images/Vue3/%E9%80%89%E9%A1%B9%E5%BC%8FAPI.png" alt="选项式" style="zoom: 50%;" />

## 组合式API

所有代码写在`setup`函数内

优点：逻辑性偏强，功能逻辑（比如数据、watch、方法等）可以写在一块容易查找，后期维护方便。

缺点：相比选项式上手要难些，因为选项式已经规定了位置，按对应位置填写代码即可。

Vue3支持组合式API









**{docsify-updated}**